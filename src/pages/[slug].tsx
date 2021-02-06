import React from 'react';
import { getAllTopics, getTopicBySlug } from '../../lib/api';
import markdownToHtml from '../utils/markdown-utils';
import Markdown from '../components/Markdown';
import Layout from '../components/layouts/MainLayout';

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

export async function getStaticProps({ params }) {
  const topic = getTopicBySlug(params.slug, ['content']);
  const content = await markdownToHtml(topic.content);
  return {
    props: {
      ...topic,
      content,
    },
  };
}

export async function getStaticPaths() {
  const topics = getAllTopics(['slug']);
  return {
    paths: topics.map((topic) => ({
      params: {
        slug: topic.slug,
      },
    })),
    fallback: false,
  };
}
