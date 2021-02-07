import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Topic } from "../types";

const contentDir = join(process.cwd(), "content");

export function getTopicSlugs(): string[] {
  return fs.readdirSync(contentDir);
}

export function getTopicBySlug(slug: string, fields: string[] = []): Topic {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Topic = {};

  fields.forEach((field) => {
    switch (field) {
      case "slug":
        items[field] = realSlug;
        break;

      case "content":
        items[field] = content;
        break;

      default:
        items[field] = data[field];
        break;
    }
  });

  return items;
}

export function getAllTopics(fields: string[] = []): Topic[] {
  const slugs = getTopicSlugs();
  const topics = slugs
    .map((slug: string) => getTopicBySlug(slug, fields))
    .sort((a, b) => (a.title > b.title ? 1 : -1));
  return topics;
}
