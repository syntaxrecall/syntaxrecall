import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import algoliasearch from 'algoliasearch';

config();

type Post = {
  objectID: any;
  slug: string;
  title: string;
  description: string;
  markdown: string;
};

const dataDir = path.join(process.cwd(), 'data');
const posts: Post[] = [];

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || '';
const ALGOLIA_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY || '';

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const searchIndex = algoliaClient.initIndex('cheatsheet_index');

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
    markdown: jsonData.content,
  };

  posts.push(post);
}

function removeFileExtension(fileName: string) {
  return fileName.substring(0, fileName.lastIndexOf('.'));
}

function run() {
  parseMarkdownFiles();
}

run();

searchIndex.saveObjects(posts)
.then((result) => {
  console.log(`Saved ${result.objectIDs.length} items.`);
  console.log('Done!');
})
.catch((err) => {
  console.error(err);
});
