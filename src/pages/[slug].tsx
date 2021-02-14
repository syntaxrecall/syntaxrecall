import React, { useEffect } from "react";
import Prism from "prismjs";
import { getAllTopics, getTopicBySlug } from "../api/api";
import HtmlContent from "../components/HtmlContent";
import Layout from "../components/layouts/MainLayout";

interface PageProps {
  content: string;
}

export default function Page({ content }: PageProps): React.ReactElement {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Layout>
        <HtmlContent htmlContent={content} />
      </Layout>
    </>
  );
}

export async function getStaticProps({
  params,
}: PageParams): Promise<StaticProps> {
  const { content } = getTopicBySlug(params.slug, ["content"]);
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
