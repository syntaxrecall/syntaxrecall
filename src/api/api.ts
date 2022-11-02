import fs from 'fs';
import path, { join } from 'path';

const dataDir = join(process.cwd(), 'data');

export function getTopicSlugs(): string[] {
  return fs.readdirSync(dataDir).map((fileName) => fileName.replace('.md', ''));
}

export function getMarkdown(slug: string) {
  return fs.readFileSync(path.join(dataDir, `${slug}.md`), 'utf8');
}
