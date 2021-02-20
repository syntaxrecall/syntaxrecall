import fs from "fs";
import { join } from "path";
import { Topic, TopicMeta } from "../types";

const dataDir = join(process.cwd(), "data");
const contentDir = join(process.cwd(), "data", "content");

export function getTopicSlugs(): string[] {
  return fs.readdirSync(contentDir);
}

export function getTopicMetas(): TopicMeta[] {
  const meta: TopicMeta[] = JSON.parse(
    fs.readFileSync(join(dataDir, "meta.json"), "utf8")
  );

  return meta;
}

export function getTopicByTopicMeta(
  topicMeta: TopicMeta,
  fields: string[] = []
): Topic {
  const realSlug = topicMeta.filename;
  const items: Topic = {};

  fields.forEach((field) => {
    switch (field) {
      case "slug":
        items[field] = realSlug || "";
        break;

      case "content": {
        let fileContents = "";
        if (realSlug) {
          const fullPath = join(contentDir, `${realSlug}.html`);
          fileContents = fs.readFileSync(fullPath, "utf8");
        }
        items[field] = fileContents;
        break;
      }

      default:
        items[field] = topicMeta[field] || "";
        break;
    }
  });

  return items;
}

export function getTopicBySlug(slug: string, fields: string[] = []): Topic {
  const realSlug = slug.replace(/\.html$/, "");
  const meta: TopicMeta[] = JSON.parse(
    fs.readFileSync(join(dataDir, "meta.json"), "utf8")
  );

  const data = meta.find((m) => m.filename === realSlug);
  const items: Topic = getTopicByTopicMeta(data, fields);
  return items;
}

export function getAllTopics(fields: string[] = []): Topic[] {
  const topicMetas = getTopicMetas();
  const topics = topicMetas
    .map((topicMeta) => getTopicByTopicMeta(topicMeta, fields))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return topics;
}
