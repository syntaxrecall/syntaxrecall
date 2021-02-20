import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Key } from "ts-key-enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks";
import { Topic } from "../types";
import Tag from "./Tag";

interface Props {
  items: Topic[];
}

function getFilteredItems(searchText: string, topics: Topic[]) {
  let results: Topic[] = [];
  if (searchText) {
    const split = searchText.toLowerCase().split(" ");
    results = topics.filter((topic) =>
      split.some((s) =>
        topic.keywords.some((keyword) => keyword.toLowerCase().includes(s))
      )
    );
  }
  return results;
}

export default function SearchBar({ items }: Props): React.ReactElement {
  const ref = useRef(null);
  const [resultIndex, setResultIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 500);
  const [filteredItems, setFilteredItems] = useState<Topic[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilteredItems(getFilteredItems(debouncedSearchTerm, items));
    } else {
      setFilteredItems(null);
    }
    setResultIndex(-1);
    ref.current.focus();
  }, [debouncedSearchTerm, setFilteredItems, items]);

  function reset() {
    setSearchText("");
    setResultIndex(-1);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!filteredItems || filteredItems.length === 0) {
      return;
    }

    if (event.key === Key.ArrowUp) {
      setResultIndex(Math.max(-1, resultIndex - 1));
    } else if (event.key === Key.ArrowDown) {
      setResultIndex(
        Math.min(filteredItems ? filteredItems.length - 1 : -1, resultIndex + 1)
      );
    } else if (event.key === Key.Enter) {
      const topic = filteredItems[resultIndex];
      if (topic.slug) {
        router.push(`/${topic.slug}`);
      } else if (topic.externalSource) {
        window.open(topic.externalSource, "_blank");
        reset();
      }
    }
  }

  function onClickResultItem(item: Topic) {
    if (item.slug) {
      router.push(item.slug);
    } else if (item.externalSource) {
      window.open(item.externalSource, "_blank");
      reset();
    }
  }

  return (
    <>
      <div
        className={clsx(
          "border-solid border shadow-sm relative py-3 px-6 text-xl border-gray-400 flex items-center bg-white",
          {
            "rounded-lg":
              debouncedSearchTerm === "" ||
              !filteredItems ||
              filteredItems.length === 0,
          },
          {
            "rounded-t-lg": filteredItems && filteredItems.length > 0,
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
          onClick={() => setSearchText("")}
        />

        {filteredItems && filteredItems.length > 0 && (
          <div className="absolute top-12 -inset-x-px rounded-b-lg bg-white border border-gray-400">
            {filteredItems.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => onClickResultItem(item)}
                className={clsx(
                  "cursor-pointer",
                  "focus:outline-none focus:text-gray-600 focus:bg-gray-100",
                  "hover:text-gray-600 hover:bg-gray-100",
                  "block w-full text-left",
                  { "rounded-b-lg": index === filteredItems.length - 1 },
                  { "text-gray-600": resultIndex === index },
                  { "bg-gray-100": resultIndex === index }
                )}
              >
                <div className="p-2">
                  {item.name}
                  {item.tags &&
                    item.tags.map((tag) => {
                      return <Tag key={tag} text={tag} className="ml-2" />;
                    })}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-sm text-center mt-4">
        Search for developer cheatsheets, code examples, tools and more...
      </p>
    </>
  );
}
