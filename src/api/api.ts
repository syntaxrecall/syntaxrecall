import fs from 'fs';
import path, { join } from 'path';

const dataDir = join(process.cwd(), 'data');

export interface TopicStaticPath {
  subject: string;
  topic: string;
}

export function getTopicStaticPaths(): TopicStaticPath[] {
  const staticPaths: TopicStaticPath[] = [];

  fs.readdirSync(dataDir).forEach((subject) => {
    const subjectPath = join(dataDir, subject);
    const isDirectory = fs.statSync(subjectPath).isDirectory();

    if (isDirectory) {
      fs.readdirSync(subjectPath).forEach((topicFileName) => {
        const topic = topicFileName.toLowerCase().replace('.md', '');
        staticPaths.push({
          subject,
          topic,
        });
      });
    }
  });

  return staticPaths;
}

export function getMarkdown(slug: string, stripFrontmatter: boolean = false) {
  let markdown = fs.readFileSync(path.join(dataDir, `${slug}.md`), 'utf8');

  if (stripFrontmatter) {
    markdown = markdown.replace(/---[\n\r\W\D\S]*---/, '');
  }

  return markdown;
}
