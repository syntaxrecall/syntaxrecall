import React from "react";
import { getAllTopics, getTopicBySlug } from "../api/api";
import markdownToHtml from "../utils/markdown-utils";
import Markdown from "../components/Markdown";
import Layout from "../components/layouts/MainLayout";

interface PageProps {
  content: string;
}

export default function Page({ content }: PageProps): React.ReactElement {
  return (
    <Layout>
      <Markdown htmlContent={content} />
    </Layout>
  );
}

export async function getStaticProps({
  params,
}: PageParams): Promise<StaticProps> {
  const topic = getTopicBySlug(params.slug, ["content"]);
  const content = await markdownToHtml(topic.content);
  return {
    props: {
      content,
    },
  };
}

export function getStaticPaths(): StaticPaths {
  const topics = getAllTopics(["slug"]);
  return {
    paths: topics.map((topic) => ({
      params: {
        slug: topic.slug,
      },
    })),
    fallback: false,
  };
}

interface StaticProps {
  props: StaticProp;
}

interface StaticProp {
  content: string;
}

interface StaticPaths {
  paths: PageParams[];
  fallback: boolean;
}

interface PageParams {
  params: Slug;
}

interface Slug {
  slug: string;
}
