import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';

config();

type Post = {
  objectID: any;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

const dataDir = path.join(process.cwd(), 'data');
const posts: Post[] = [];

console.log('Running generatePosts script...');

function parseMarkdownFiles() {
  readDirectory(dataDir);
}

function readDirectory(dir: string) {
  fs.readdirSync(dir).forEach((fileName) => {
    const isDirectory = fs.statSync(path.join(dir, fileName)).isDirectory();
    if (isDirectory) {
      readDirectory(path.join(dir, fileName));
      return;
    } else if (!fileName.endsWith('.md')) {
      return;
    }

    readFile(dir, fileName);
  });
}

function readFile(dirName: string, fileName: string) {
  const filePath = path.join(dirName, fileName);
  const fileData = fs.readFileSync(filePath, 'utf8');
  const jsonData = matter(fileData);

  if (!jsonData.data?.id) {
    throw Error(`file=${fileName} should have an id.`);
  }

  const fileNameWithoutExtension = removeFileExtension(fileName.toLowerCase());
  const filePathWithoutExtension = path.join(dirName, fileNameWithoutExtension);
  const slug = filePathWithoutExtension.replace(dataDir, '').toLowerCase().split('/');

  const id = jsonData.data.id;
  const post: Post = {
    objectID: id,
    slug: slug.join('/'),
    title: jsonData.data.title,
    description: jsonData.data.description,
    keywords: jsonData.data.keywords || [],
  };

  posts.push(post);
}

function removeFileExtension(fileName: string) {
  return fileName.substring(0, fileName.lastIndexOf('.'));
}

function run() {
  parseMarkdownFiles();
  write();
}

function write() {
  const json = JSON.stringify(posts);

  const outputDir = path.join(process.cwd(), 'public');
  // write this to a file
  fs.writeFileSync(path.join(outputDir, 'data.json'), json);
  console.log(`Saved ${posts.length} items.`);
  console.log('Done!');
}

run();
