import { getMarkdown, getTopicSlugs } from "../api/api";
import md from 'markdown-it';

interface Props {
  markdown: string;
}

export default function Page({
  markdown,
}: Props) {
  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: markdown }} />
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
  });
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
