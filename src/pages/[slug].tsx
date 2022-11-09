import { getMarkdown, getTopicSlugs } from "../api/api";
import md from 'markdown-it';
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
  markdown: string;
}

export default function Page({
  markdown,
}: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 min-h-screen">
        <div className="flex flex-col min-h-full">
          <div className="mt-4">
            <Link href="/">
              <div className="rounded-full h-16 w-16 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} width="10" height="16" />
              </div>
            </Link>
          </div>

          <article
            className={clsx(
              "markdown px-2 sm:px-0 my-16 flex-grow relative",
            )}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: markdown }}
          />

          <div className="flex items-center justify-center mb-16">
            <button
              type="button"
              className="flex items-center justify-center hover:bg-gray-200 cursor-pointer rounded-full w-16 h-16 focus:outline-none"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FontAwesomeIcon icon={faChevronUp} width="14" height="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StaticProps {
  params: {
    slug: string;
  }
}

export async function getStaticProps({ params: { slug } }: StaticProps): Promise<any> {
  const markdown = getMarkdown(slug);
  const parser = md({
    breaks: true,
    linkify: true,
  })
  .use(require('markdown-it-emoji'));

  const html = parser.render(markdown);
  return {
    props: {
      markdown: html,
    },
  };
}

export function getStaticPaths(): any {
  const slugs = getTopicSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug, 
      }
    })),
    fallback: false,
  };
}
