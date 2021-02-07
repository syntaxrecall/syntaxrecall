import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import externalLinks from "remark-external-links";
import gfm from "remark-gfm";
import toc from "remark-toc";
import slug from "remark-slug";

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await remark()
    .use(externalLinks, { target: "_blank" })
    .use(html)
    .use(prism)
    .use(gfm)
    .use(toc)
    .use(slug)
    .process(markdown);
  return result.toString();
}
