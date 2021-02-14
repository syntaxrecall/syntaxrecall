import React from "react";
import clsx from "clsx";

interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className }: TagProps): React.ReactElement {
  return (
    <div
      className={clsx(
        className,
        "inline-block p-1 border rounded bg-gray-200 text-xs sm:text-sm"
      )}
    >
      {`#${text}`}
    </div>
  );
}
