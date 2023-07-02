import { getMarkdown, getAllMetadata } from '../../api/api';
import md from 'markdown-it';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronLeft,
  faChevronUp,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Head from 'next/head';
import hljs from 'highlight.js';
import mdUtils from 'markdown-it/lib/common/utils';
import 'highlight.js/styles/atom-one-dark.css';
import { parse as htmlParser } from 'node-html-parser';
import { useEffect, useRef, useState } from 'react';
import { Show } from '../../components/Show';

interface Props {
  markdown: string;
  title: string;
  slug: string;
  toc?: string;
}

export default function Page({ markdown, title, toc }: Props) {
  const [showTOC, setTOC] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function toggleTOC(): void {
    setTOC(!showTOC);
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTOC(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-4 md:col-span-6 2xl:col-start-5 2xl:col-span-4 min-h-screen">
          <div className="flex flex-col min-h-full">
            <div className="mt-4">
              <Link href="/">
                <div className="rounded-full h-16 w-16 flex items-center justify-center hover:bg-gray-300 dark:text-zinc-400 dark:hover:bg-zinc-700 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    width="10"
                    height="16"
                  />
                </div>
              </Link>
            </div>

            <Show when={!!toc}>
              <div className="hidden md:block fixed right-0 top-0 bottom-0 p-4 dark:bg-neutral-900 bg-gray-200 z-10">
                <h2 className="text-gray-300 text-xl text-center">TOC</h2>
                <div dangerouslySetInnerHTML={{ __html: toc || '' }}></div>
              </div>

              <div ref={ref} className="block md:hidden fixed bottom-0 p-4 dark:bg-neutral-900 bg-gray-200 z-10 w-full">
                {showTOC
                  ? (
                    <div dangerouslySetInnerHTML={{ __html: toc || '' }}></div>
                  )
                  : null}

                <div className="relative">
                  <h2 className="text-gray-300 text-xl">Table of contents</h2>

                  <button
                    className="absolute right-0 top-0 bottom-0"
                    onClick={toggleTOC}
                    title="Show TOC"
                  >
                    <FontAwesomeIcon
                      icon={showTOC ? faClose : faBars}
                      className="mr-6 dark:text-zinc-400"
                      size="2x"
                    />
                  </button>
                </div>
              </div>
            </Show>

            <article
              className={clsx('markdown px-2 sm:px-0 my-16 flex-grow relative')}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: markdown }}
            />

            <div className="flex items-center justify-center mb-16">
              <button
                title="Go to top of page"
                type="button"
                className="flex items-center justify-center  hover:bg-gray-300 dark:text-zinc-400 dark:hover:bg-zinc-700 cursor-pointer rounded-full w-16 h-16 focus:outline-none"
                onClick={() => window.scrollTo(0, 0)}
              >
                <FontAwesomeIcon icon={faChevronUp} width="14" height="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface StaticProps {
  params: {
    subject: string;
    slug: string[];
  };
}

export async function getStaticProps({
  params: { slug },
}: StaticProps): Promise<any> {
  const markdown = getMarkdown(slug.join('/'), true);
  const parser = md({
    breaks: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            '</code></pre>'
          );
        } catch (__) {
          /* empty */
        }
      }

      return (
        '<pre class="hljs"><code>' + mdUtils.escapeHtml(str) + '</code></pre>'
      );
    },
  })
    .use(require('markdown-it-emoji'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-anchor'), {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#',
    })
    .use(require('markdown-it-toc-done-right'));

  const html = parser.render(markdown);
  const parsedHtml = htmlParser(html);
  const tocData = parsedHtml
    .querySelector('.table-of-contents')?.outerHTML || '';

  parsedHtml.querySelector('p')?.remove();
  parsedHtml.querySelector('.table-of-contents')?.remove();
  const modifiedHtml = parsedHtml.toString();

  return {
    props: {
      markdown: modifiedHtml,
      title: '',
      slug: '',
      toc: tocData,
    },
  };
}

export function getStaticPaths(): any {
  const paths = getAllMetadata();
  return {
    paths: paths.map((data) => ({
      params: {
        slug: data.slug.replace('/', '').split('/'),
      },
    })),
    fallback: false,
  };
}
