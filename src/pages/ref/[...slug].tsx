import { getMarkdown, getAllMetadata } from '../../api/api';
import md from 'markdown-it';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  markdown: string;
  title: string;
  slug: string;
}

export default function Page({ markdown, title, slug }: Props) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 min-h-screen">
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

            {slug}

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

function getTitle(subject: string, topic: string): string {
  const subjectFormatted = subject.substring(0, 1).toUpperCase() + subject.substring(1).toLowerCase();
  const topicFormatted = (topic.substring(0, 1).toUpperCase() + topic.substring(1).toLowerCase()).replace('-', ' ');
  return `${subjectFormatted} - ${topicFormatted}`;
}

export async function getStaticProps({
  params: { slug },
}: StaticProps): Promise<any> {
  const markdown = getMarkdown(slug.join('/'), true);
  const parser = md({
    breaks: true,
    linkify: true,
  })
    .use(require('markdown-it-emoji'))
    .use(require('markdown-it-footnote'));

  const html = parser.render(markdown);
  
  return {
    props: {
      markdown: html,
      title: '',
      slug: '',
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
