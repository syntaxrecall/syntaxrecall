

import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Post } from "../interfaces";

export default function SearchResultItem({
  item,
}: {
  item: Post;
}): React.ReactElement {
  const router = useRouter();

  function onClickResultItem() {
    if (item.id) {
      router.push(item.id);
    }
  }

  return (
    <button
      type="button"
      key={item.id}
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
        {item.id}
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
