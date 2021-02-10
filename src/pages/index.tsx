import React, { useState, useCallback } from "react";
import Link from "next/link";
import Searchbar from "../components/Searchbar";
import { getAllTopics } from "../api/api";
import { Topic } from "../types";

interface Props {
  topics: Topic[];
}

export default function Page({ topics }: Props): React.ReactElement {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="relative col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-5 xl:col-span-4 min-h-screen">
        <div className="absolute top-1/3 inset-x-0 px-2 sm:px-0">
          <h1 className="text-4xl text-center font-bold mb-4">Syntax Recall</h1>
          <Searchbar items={topics} />
        </div>
      </div>
    </div>
  );
}

interface StaticProps {
  props: StaticProp;
}

interface StaticProp {
  topics: Topic[];
}

export function getStaticProps(): StaticProps {
  const topics = getAllTopics(["title", "slug", "keywords"]) as Topic[];
  return {
    props: {
      topics,
    },
  };
}
