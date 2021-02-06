import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import externalLinks from 'remark-external-links';
import gfm from 'remark-gfm';
import toc from 'remark-toc';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(externalLinks, { target: '_blank' })
    .use(html)
    .use(prism)
    .use(gfm)
    .use(toc)
    .process(markdown);
  return result.toString();
}
