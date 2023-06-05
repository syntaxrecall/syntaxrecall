import fs from 'fs';
import path, { join } from 'path';

const dataDir = join(process.cwd(), 'data');

export interface TopicStaticPath {
  title: string;
  slug: string;
  subject: string;
}

export function getTopicStaticPaths(): TopicStaticPath[] {
  const staticPaths = readDirectory(dataDir);
  return staticPaths;
}

function readDirectory(dir: string): TopicStaticPath[] {
  const staticPaths: TopicStaticPath[] = [];
  fs.readdirSync(dir).forEach((fileName) => {
    const filePath = join(dir, fileName);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (isDirectory) {
      readDirectory(filePath);
      return;
    }

    staticPaths.push(readFile(dir, fileName));
  });

  return staticPaths;
}

function readFile(dirPath: string, fileName: string): TopicStaticPath {
  const fileNameWithoutExtension = fileName.toLowerCase().replace('.md', '');
  let tempPath = dirPath.replace(dataDir, '');
  const staticPath: TopicStaticPath = {
    title: fileNameWithoutExtension,
    slug: join(tempPath, fileNameWithoutExtension),
    subject: tempPath,
  };

  return staticPath;
}

export function getMarkdown(slug: string, stripFrontmatter: boolean = false) {
  let markdown = fs.readFileSync(`${path.join(dataDir, slug)}.md`, 'utf8');

  if (stripFrontmatter) {
    markdown = markdown.replace(/---[\n\r\W\D\S]*---/, '');
  }

  return markdown;
}
