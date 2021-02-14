import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Prism from "prismjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface HtmlContentProps {
  htmlContent: string;
  className?: string;
}

export default function HtmlContent({
  htmlContent,
  className,
}: HtmlContentProps): React.ReactElement {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    const document = new DOMParser().parseFromString(htmlContent, "text/html");
    Prism.highlightAllUnder(document.documentElement);
    setHtml(document.documentElement.innerHTML);
  }, [htmlContent]);

  if (!html) {
    return null;
  }

  return (
    <>
      <article
        className={clsx("content px-2 sm:px-0 my-16", className)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
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
