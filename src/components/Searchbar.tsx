import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Key } from "ts-key-enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks";
import { Post } from "../interfaces";
import { GetSearch } from "../api/search.api";
import useClickOutside from "../hooks/useClickOutside";

interface Props {
  items: Post[];
}

async function getSearchRecommendations(
  searchText: string
): Promise<Post[]> {
  const data = await GetSearch(searchText);
  const tt = data || [];
  return tt;
}

export default function SearchBar({ items }: Props): React.ReactElement {
  const ref = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [resultIndex, setResultIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText.trim(), 500);
  const [searchRecommendations, setSearchRecommendations] = useState<Post[]>([]);
  const router = useRouter();

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
      if (resultIndex >= 0 && resultIndex < searchRecommendations.length) {
        const selectedItem = searchRecommendations[resultIndex];
        router.push(`/ref/${selectedItem.slug}`);
        return;
      }

      const query = searchText.trim();
      router.push(`/search?q=${query}`);
    }
  }

  function onClickSearchRecommendation(searchRecommendation: Post) {
    router.push(`/ref${searchRecommendation.slug}`);
    setShowDropdown(false);
  }

  function onChangeSearchText(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
    setShowDropdown(true);
  }

  const searchBarRef = useClickOutside({
    onClickOutside: () => {
      setShowDropdown(false);
    }
  });

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

  useEffect(() => {
    if (ref) {
      ref.current?.focus();
    }
  }, [ref]);

  return (
    <>
      <div
        ref={searchBarRef}
        className={clsx(
          "border-solid border shadow-sm relative py-3 px-6 text-xl dark:border-black border-gray-400 flex items-center dark:bg-zinc-700 bg-white",
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
          className="mr-6 dark:text-zinc-400"
          width="20"
          height="20"
        />
        <input
          ref={ref}
          type="text"
          name="search"
          className="focus:outline-none w-full dark:bg-zinc-700 dark:text-zinc-400"
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
            "dark:text-zinc-400",
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
          <div className="absolute top-12 -inset-x-px rounded-b-lg dark:bg-zinc-700 bg-white border dark:border-zinc-800 border-gray-400">
              {searchRecommendations.map(
                (searchRecommendation, searchRecommendationIndex) => (
                  <button
                    type="button"
                    key={searchRecommendation?.id}
                    className={clsx(
                      "cursor-pointer",
                      "p-2",
                      "hover:text-gray-600 hover:bg-gray-100 dark:hover:text-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-600",
                      "focus:outline-none",
                      "block w-full text-left",
                      {
                        "bg-gray-100 text-gray-600 dark:bg-zinc-600 dark:text-zinc-400":
                          resultIndex === searchRecommendationIndex,
                      },
                      {
                        "rounded-b-lg":
                          searchRecommendationIndex ===
                          searchRecommendations.length - 1,
                      }
                    )}
                    onClick={() =>
                      onClickSearchRecommendation(searchRecommendation)
                    }
                  >
                    <div>
                      {searchRecommendation.title}
                    </div>
                    <small>
                      {searchRecommendation.description}
                    </small>
                  </button>
                )
              )}
            </div>
          )}
      </div>
    </>
  );
}
