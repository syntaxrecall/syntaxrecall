

import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Tag from "./Tag";
import { Topic } from "../interfaces";

export default function SearchResultItem({
  item,
}: {
  item: Topic;
}): React.ReactElement {
  const router = useRouter();

  function onClickResultItem() {
    if (item.slug) {
      router.push(item.slug);
    } else if (item.externalSource) {
      window.location.href = item.externalSource;
    }
  }

  return (
    <button
      type="button"
      key={item.name}
      onClick={() => onClickResultItem()}
      className={clsx(
        "p-2",
        "cursor-pointer",
        "focus:outline-none focus:text-gray-600 focus:bg-gray-100",
        "hover:text-gray-600 hover:bg-gray-100",
        "block w-full text-left"
      )}
    >
      <div
        className={clsx({
          "pb-1": !!item.description || !!item.metaDescription,
        })}
      >
        {item.name}
        {item.tags &&
          item.tags.map((tag) => {
            return <Tag key={tag} text={tag} className="ml-2" />;
          })}
      </div>

      {item.description || item.metaDescription ? (
        <div className="text-xs">
          {item.description || item.metaDescription}
        </div>
      ) : null}
    </button>
  );
}
