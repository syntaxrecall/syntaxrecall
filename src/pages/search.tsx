import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Searchbar from "../components/Searchbar";
import { Topic } from "../interfaces";
import SearchResultItem from "../components/SearchResultItem";

interface Props {
  topics: Topic[];
}

function getTopicsByQuery(topics: Topic[], query: string) {
  if (!query) {
    return [];
  }

  const splitQuery = query.trim().split(" ");
  return topics.filter((topic) => {
    return splitQuery.every((searchText) =>
      topic?.keywords?.some((keyword) => keyword.includes(searchText))
    );
  });
}

export default function Page({ topics }: Props): React.ReactElement {
  const router = useRouter();
  const query = new URLSearchParams(router.asPath.substring(7)).get("q") || '';

  const [searchResultLimit, setSearchResultLimit] = useState(10);
  let searchResults = getTopicsByQuery(topics, query);
  const totalSearchResults = searchResults.length;
  searchResults = searchResults.splice(0, searchResultLimit);
  return (
    <>
      <Head>
        <title>Syntax Recall</title>
        <meta
          name="description"
          content="Search for developer cheatsheets, code examples, tools and more..."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="grid grid-cols-12 min-h-screen">
        <div className="relative col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-5 xl:col-span-4 min-h-screen">
          <div className="absolute mt-4 inset-x-0 px-2 sm:px-0">
            <div className="flex">
              <div
                className="mr-4 hidden sm:block"
                style={{ marginTop: "3px" }}
              >
                <Link href="/">
                  <img
                    src="logo.png"
                    alt="Logo"
                    className="cursor-pointer"
                    style={{ width: "48px" }}
                  />
                </Link>
              </div>

              <div className="flex-grow">
                <Searchbar items={topics} />
                {searchResults.map((searchResult) => (
                  <div key={searchResult.name}>
                    <SearchResultItem item={searchResult} />
                  </div>
                ))}
                {searchResultLimit < totalSearchResults ? (
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded w-full mt-4"
                    onClick={() => setSearchResultLimit(searchResultLimit + 10)}
                  >
                    Load more
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface StaticProps {
  props: StaticProp;
}

interface StaticProp {
  topics: Topic[];
}

export function getStaticProps(): StaticProps {
  return {
    props: {
      topics: [],
    },
  };
}
