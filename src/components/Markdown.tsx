import React from 'react';
import clsx from 'clsx';

interface MarkdownProps {
  htmlContent: string;
  className?: string
}

export default function Markdown({ htmlContent, className }: MarkdownProps): React.ReactElement {
  return (
    <article
      className={clsx('prose lg:prose-xl px-8 m-auto my-16', className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
