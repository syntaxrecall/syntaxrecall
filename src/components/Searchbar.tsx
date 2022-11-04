import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Key } from "ts-key-enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks";
import { Topic } from "../interfaces";
import { GetSearch } from "../api/search.api";
import { Post } from "../interfaces/Post";

interface Props {
  items: Topic[];
}

async function getSearchRecommendations(
  searchText: string
): Promise<Post[]> {
  const data = await GetSearch(searchText);
  const tt = data?.hits || [];
  return tt;
}

export default function SearchBar({ items }: Props): React.ReactElement {
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [resultIndex, setResultIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText.trim(), 500);
  const [searchRecommendations, setSearchRecommendations] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearchTerm) {
      getSearchRecommendations(debouncedSearchTerm)
      .then((value) => {
        setSearchRecommendations(value);
      })
    } else {
      setSearchRecommendations([]);
    }
    setResultIndex(-1);
  }, [debouncedSearchTerm, items]);

  function reset() {
    setSearchText("");
    setResultIndex(-1);
    setSearchRecommendations([]);
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
      let query = searchText.trim();
      if (resultIndex >= 0 && resultIndex < searchRecommendations.length) {
        query = searchRecommendations[resultIndex]?.id?.trim();
      }
      router.push(`/search?q=${query}`);
    }
  }

  function onClickSearchRecommendation(searchRecommendation: string) {
    router.push(`/search?q=${searchRecommendation.trim()}`);
    setShowDropdown(false);
  }

  function onChangeSearchText(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
    setShowDropdown(true);
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
          onChange={onChangeSearchText}
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

        {showDropdown &&
          searchRecommendations &&
          searchRecommendations.length > 0 && (
            <div className="absolute top-12 -inset-x-px rounded-b-lg bg-white border border-gray-400">
              {searchRecommendations.map(
                (searchRecommendation, searchRecommendationIndex) => (
                  <button
                    type="button"
                    key={searchRecommendation?.id}
                    className={clsx(
                      "cursor-pointer",
                      "p-2",
                      "hover:text-gray-600 hover:bg-gray-100",
                      "focus:outline-none",
                      "block w-full text-left",
                      {
                        "bg-gray-100 text-gray-600":
                          resultIndex === searchRecommendationIndex,
                      },
                      {
                        "rounded-b-lg":
                          searchRecommendationIndex ===
                          searchRecommendations.length - 1,
                      }
                    )}
                    onClick={() =>
                      onClickSearchRecommendation(searchRecommendation?.id)
                    }
                  >
                    {searchRecommendation?.id}
                  </button>
                )
              )}
            </div>
          )}
      </div>
    </>
  );
}
