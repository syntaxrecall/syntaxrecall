import React from "react";
import Head from "next/head";
import { getAllTopics, getTopicBySlug } from "../api/api";
import HtmlContent from "../components/HtmlContent";
import Layout from "../components/layouts/MainLayout";

interface PageProps {
  content: string;
  pageTitle: string;
  metaDescription: string;
}

export default function Page({
  content,
  pageTitle,
  metaDescription,
}: PageProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
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
  const { content, pageTitle, metaDescription } = getTopicBySlug(params.slug, [
    "content",
    "pageTitle",
    "metaDescription",
  ]);
  return {
    props: {
      content,
      pageTitle,
      metaDescription,
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
  pageTitle: string;
  metaDescription: string;
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
