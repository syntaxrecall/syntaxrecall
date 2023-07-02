import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Searchbar from "../components/Searchbar";
import SearchResultItem from "../components/SearchResultItem";
import { GetSearch } from "../api/search.api";
import { Post } from '../interfaces';
import { useRouter } from "next/router";

export default function Page(): React.ReactElement {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function onLoad() {
      const { q } = router.query;
      const searchText = q?.toString() || '';
      const result = await GetSearch(searchText);
      setPosts(result);
    }

    onLoad();
  }, [router]);

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
                <Searchbar items={posts} />
                <div className="mt-4">
                  {posts.map((post) => (
                    <div key={post.id}>
                      <SearchResultItem item={post} />
                    </div>
                  ))}
                </div>
                {/* {searchResultLimit < totalSearchResults ? (
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded w-full mt-4"
                    onClick={() => setSearchResultLimit(searchResultLimit + 10)}
                  >
                    Load more
                  </button>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
