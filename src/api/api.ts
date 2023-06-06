import fs from 'fs';
import path, { join } from 'path';

const dataDir = join(process.cwd(), 'data');

export interface QuickRefMetadata {
  title: string;
  slug: string;
}

export function getAllMetadata(): QuickRefMetadata[] {
  return getMetadataFromDirectory(dataDir);
}

function getMetadataFromDirectory(dir: string): QuickRefMetadata[] {
  const metadatas: QuickRefMetadata[] = [];
  fs.readdirSync(dir).forEach((fileName) => {
    const filePath = join(dir, fileName);
    const isDirectory = fs.statSync(filePath).isDirectory();
    if (isDirectory) {
      metadatas.push(...getMetadataFromDirectory(filePath));
      return;
    }

    metadatas.push(getMetadataFromFile(dir, fileName));
  });

  return metadatas;
}

function getMetadataFromFile(dirPath: string, fileName: string): QuickRefMetadata {
  let fileNameWithoutExtension = fileName.toLowerCase().replace('.md', '');

  if (fileNameWithoutExtension === 'index') {
    fileNameWithoutExtension = '';
  }

  let tempPath = dirPath.replace(dataDir, '');
  const metadata: QuickRefMetadata = {
    title: fileNameWithoutExtension,
    slug: join(tempPath, fileNameWithoutExtension),
  };

  return metadata;
}

export function getMarkdown(slug: string, stripFrontmatter: boolean = false) {
  let markdown = fs.readFileSync(`${path.join(dataDir, slug)}.md`, 'utf8');

  if (stripFrontmatter) {
    markdown = markdown.replace(/---[\n\r\W\D\S]*---/, '');
  }

  return markdown;
}
