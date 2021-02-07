import React, { useState, useCallback } from "react";
import Searchbar from "../components/Searchbar";
import { getAllTopics } from "../api/api";
import { Topic } from "../types";

interface Props {
  topics: Topic[];
}

function getFilteredItems(searchText: string, topics: Topic[]) {
  let results: Topic[] = [];
  if (searchText) {
    results = topics.filter((topic) =>
      topic.keywords.includes(searchText.toLowerCase())
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
      <div className="col-start-5 col-span-4 min-h-screen">
        <div className="flex items-end" style={{ minHeight: "40%" }}>
          <div className="w-full">
            <h1 className="text-4xl text-center font-bold mb-4">
              Syntax Recall
            </h1>
            <Searchbar onChange={onSearchChange} />
          </div>
        </div>

        {filteredItems && (
          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold">
              {`Found ${filteredItems.length} results`}
            </h2>
            {filteredItems.map((item) => (
              <div key={item.slug}>{item.title}</div>
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
