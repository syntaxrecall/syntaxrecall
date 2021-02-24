import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Key } from "ts-key-enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks";
import { Topic } from "../types";

interface Props {
  items: Topic[];
}

function getSearchRecommendations(
  searchText: string,
  topics: Topic[]
): string[] {
  const searchTextToLowercase = searchText.trim().toLowerCase();
  const splitSearchResults = searchTextToLowercase.split(" ");
  const filteredTopics = topics.filter((topic) => {
    return splitSearchResults.every((searchTextValue) =>
      topic.keywords.some((keyword) => keyword.startsWith(searchTextValue))
    );
  });

  const keywords = filteredTopics.flatMap((value) => value.keywords);

  const allSearchTextMatchesKeyword = splitSearchResults.every(
    (value) => keywords.indexOf(value) !== -1
  );

  const searchTextToDisplay = splitSearchResults
    .slice(0, splitSearchResults.length - 1)
    .join(" ");

  const results = keywords
    .map((keyword, index) => {
      const lastSearchResult =
        splitSearchResults[splitSearchResults.length - 1];

      const lastSearchTextContainsKeyword =
        lastSearchResult.indexOf(keyword) !== -1;

      const keywordStartsWith = keyword.startsWith(lastSearchResult);
      let show = true;
      let displayKeyword = keyword;

      if (lastSearchTextContainsKeyword) {
        displayKeyword = `${searchTextToLowercase}`;
      } else if (keywordStartsWith) {
        displayKeyword = `${searchTextToDisplay} ${keyword}`;
      } else if (
        allSearchTextMatchesKeyword &&
        !searchTextToLowercase.includes(keyword)
      ) {
        if (searchTextToLowercase.includes(keyword)) {
          show = false;
        }
        displayKeyword = `${searchTextToLowercase} ${keyword}`;
      } else {
        show = false;
      }

      return {
        keyword: displayKeyword,
        unique: keywords.indexOf(keyword) === index,
        searchTextContainsKeyword: lastSearchTextContainsKeyword,
        show,
      };
    })
    .filter((value) => value.unique && value.show)
    .sort((a) => {
      if (a.searchTextContainsKeyword) {
        return -1;
      }
      return 0;
    })
    .map((value) => value.keyword);

  const r = results.filter((value, index) => results.indexOf(value) === index);
  return r.splice(0, 8);
}

export default function SearchBar({ items }: Props): React.ReactElement {
  const ref = useRef(null);
  const [resultIndex, setResultIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText.trim(), 500);
  const [searchRecommendations, setSearchRecommendations] = useState<
    string[] | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchRecommendations(
        getSearchRecommendations(debouncedSearchTerm, items)
      );
    } else {
      setSearchRecommendations(null);
    }
    setResultIndex(-1);
    ref.current.focus();
  }, [debouncedSearchTerm, items]);

  function reset() {
    setSearchText("");
    setResultIndex(-1);
    setSearchRecommendations(null);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!searchRecommendations || searchRecommendations.length === 0) {
      return;
    }

    if (event.key === Key.ArrowUp) {
      setResultIndex(Math.max(-1, resultIndex - 1));
    } else if (event.key === Key.ArrowDown) {
      setResultIndex(
        Math.min(
          searchRecommendations ? searchRecommendations.length - 1 : -1,
          resultIndex + 1
        )
      );
    } else if (event.key === Key.Enter) {
      const searchRecommendation = searchRecommendations[resultIndex];
      router.push(`/?q=${searchRecommendation}`);
    }
  }

  function onClickSearchRecommendation(searchRecommendation: string) {
    router.push(`/?q=${searchRecommendation}`);
  }

  return (
    <>
      <div
        className={clsx(
          "border-solid border shadow-sm relative py-3 px-6 text-xl border-gray-400 flex items-center bg-white",
          {
            "rounded-lg":
              debouncedSearchTerm === "" ||
              !searchRecommendations ||
              searchRecommendations.length === 0,
          },
          {
            "rounded-t-lg":
              searchRecommendations && searchRecommendations.length > 0,
          }
        )}
      >
        <FontAwesomeIcon
          icon={faSearch}
          className="mr-6"
          width="20"
          height="20"
        />
        <input
          ref={ref}
          type="text"
          name="search"
          className="focus:outline-none w-full"
          placeholder="Search..."
          autoComplete="off"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="Search"
          onKeyDown={onKeyDown}
        />

        <FontAwesomeIcon
          icon={faTimes}
          className={clsx(
            "cursor-pointer",
            "ml-6",
            { block: !!searchText },
            { hidden: !searchText }
          )}
          width="13.75"
          height="20"
          onClick={reset}
        />

        {searchRecommendations && searchRecommendations.length > 0 && (
          <div className="absolute top-12 -inset-x-px rounded-b-lg bg-white border border-gray-400">
            {searchRecommendations.map(
              (searchRecommendation, searchRecommendationIndex) => (
                <button
                  type="button"
                  key={searchRecommendation}
                  className={clsx(
                    "cursor-pointer",
                    "p-2",
                    "hover:text-gray-600 hover:bg-gray-100",
                    "focus:outline-none",
                    "block w-full text-left",
                    {
                      "bg-gray-100 text-gray-600":
                        resultIndex === searchRecommendationIndex,
                    }
                  )}
                  onClick={() =>
                    onClickSearchRecommendation(searchRecommendation)
                  }
                >
                  {searchRecommendation}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}
