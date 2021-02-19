import fs from "fs";
import { join } from "path";
import { Topic, TopicMeta } from "../types";

const dataDir = join(process.cwd(), "data");
const contentDir = join(process.cwd(), "data", "content");

export function getTopicSlugs(): string[] {
  return fs.readdirSync(contentDir);
}

export function getTopicBySlug(slug: string, fields: string[] = []): Topic {
  const realSlug = slug.replace(/\.html$/, "");
  const fullPath = join(contentDir, `${realSlug}.html`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const meta: TopicMeta[] = JSON.parse(
    fs.readFileSync(join(dataDir, "meta.json"), "utf8")
  );

  const data = meta.find((m) => m.filename === realSlug);
  const items: Topic = {};

  fields.forEach((field) => {
    switch (field) {
      case "slug":
        items[field] = realSlug;
        break;

      case "content":
        items[field] = fileContents;
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
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return topics;
}
