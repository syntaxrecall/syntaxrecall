import React from "react";
import Head from "next/head";
import { getAllTopics, getTopicBySlug } from "../api/api";
import HtmlContent from "../components/HtmlContent";
import Layout from "../components/layouts/MainLayout";

interface PageProps {
  content: string;
  title: string;
}

export default function Page({
  content,
  title,
}: PageProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>Syntax Recall - {title}</title>
      </Head>
      <Layout>
        <HtmlContent htmlContent={content} />
      </Layout>
    </>
  );
}

export async function getStaticProps({
  params,
}: PageParams): Promise<StaticProps> {
  const { content, title } = getTopicBySlug(params.slug, ["content", "title"]);
  return {
    props: {
      content,
      title,
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
  title: string;
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
