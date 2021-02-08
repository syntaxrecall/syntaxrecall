import React, { useState, useCallback } from "react";
import Link from "next/link";
import Searchbar from "../components/Searchbar";
import { getAllTopics } from "../api/api";
import { Topic } from "../types";

interface Props {
  topics: Topic[];
}

function getFilteredItems(searchText: string, topics: Topic[]) {
  let results: Topic[] = [];
  if (searchText) {
    results = topics.filter(
      (topic) =>
        topic.keywords.filter((keyword) =>
          keyword.toLowerCase().includes(searchText.toLowerCase())
        ).length > 0
    );
  }
  return results;
}

export default function Page({ topics }: Props): React.ReactElement {
  const [filteredItems, setFilteredItems] = useState<Topic[] | null>(null);
  const onSearchChange = useCallback(
    (searchText) => {
      if (searchText) {
        setFilteredItems(getFilteredItems(searchText, topics));
      } else {
        setFilteredItems(null);
      }
    },
    [topics, setFilteredItems]
  );
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-5 xl:col-span-4 min-h-screen">
        <div className="flex items-end" style={{ minHeight: "40%" }}>
          <div className="w-full px-2 sm:px-0">
            <h1 className="text-4xl text-center font-bold mb-4">
              Syntax Recall
            </h1>
            <Searchbar onChange={onSearchChange} />
          </div>
        </div>

        {filteredItems && (
          <div className="mt-4 px-2 sm:px-0">
            <h2 className="mb-2 text-2xl font-bold">
              {`Found ${filteredItems.length} results`}
            </h2>
            {filteredItems.map((item) => (
              <Link key={item.slug} href={item.slug}>
                <div className="cursor-pointer hover:text-gray-600">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        )}
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
