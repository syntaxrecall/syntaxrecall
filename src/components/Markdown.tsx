import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface MarkdownProps {
  htmlContent: string;
  className?: string;
}

export default function Markdown({
  htmlContent,
  className,
}: MarkdownProps): React.ReactElement {
  return (
    <>
      <article
        className={clsx("prose lg:prose-xl m-auto px-8 my-16", className)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <div className="flex items-center justify-center mb-16">
        <button
          type="button"
          className="flex items-center justify-center hover:bg-gray-200 cursor-pointer rounded-full w-16 h-16 focus:outline-none"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FontAwesomeIcon icon={faChevronUp} width="14" height="16" />
        </button>
      </div>
    </>
  );
}
