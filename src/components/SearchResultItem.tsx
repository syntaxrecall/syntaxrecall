

import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PageData } from "../api/search.api";

export default function SearchResultItem({
  item,
}: {
  item: PageData;
}): React.ReactElement {
  const router = useRouter();

  function onClickResultItem() {
    if (item.slug) {
      router.push(`/docs${item.slug}`);
    }
  }

  return (
    <button
      type="button"
      key={item.objectID}
      onClick={() => onClickResultItem()}
      className={clsx(
        "p-2",
        "cursor-pointer",
        "focus:outline-none focus:text-gray-600 focus:bg-gray-100 dark:focus:text-zinc-400 dark:focus:bg-zinc-700",
        "hover:text-gray-600 hover:bg-gray-100 dark:hover:text-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-700 rounded",
        "block w-full text-left"
      )}
    >
      <div
        className={clsx({
          // "pb-1": !!item.description || !!item.metaDescription,
        })}
      >
        <div>
          {item.title}
        </div>
        <small>
          {item.description}
        </small>

        {/* {item.tags &&
          item.tags.map((tag) => {
            return <Tag key={tag} text={tag} className="ml-2" />;
          })} */}
      </div>

      {/* {item.description || item.metaDescription ? (
        <div className="text-xs">
          {item.description || item.metaDescription}
        </div>
      ) : null} */}
    </button>
  );
}
