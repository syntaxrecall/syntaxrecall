const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fetch = require('isomorphic-unfetch');
require('dotenv').config();

const dataDir = path.join(process.cwd(), 'data');
const posts = [];

const MEILISEARCH_URL = process.env.MEILISEARCH_URL || 'http://localhost:7700';

console.log('Running generatePosts script...');

function parseMarkdownFiles() {
  readDirectory(dataDir);
}

function readDirectory(dir) {
  fs.readdirSync(dir).forEach((fileName) => {
    const isDirectory = fs.statSync(path.join(dir, fileName)).isDirectory();
    if (isDirectory) {
      readDirectory(path.join(dir, fileName));
      return;
    }

    readFile(dir, fileName);
  });
}

function readFile(dirName, fileName) {
  const filePath = path.join(dirName, fileName);
  const fileData = fs.readFileSync(filePath, 'utf8');
  const jsonData = matter(fileData);

  if (!jsonData.data?.id) {
    throw Error(`file=${fileName} should have an id.`);
  }

  const slug = `${dirName.replace(dataDir, '').toLowerCase()}/${removeFileExtension(
    fileName.toLowerCase()
  )}`;
  const id = jsonData.data.id;
  const post = {
    id,
    slug,
    title: jsonData.data.title,
    description: jsonData.data.description,
    markdown: jsonData.content,
  };

  posts.push(post);
}

function getTopicFromFileName(fileName) {
  return removeFileExtension(fileName.substring(0, 1).toUpperCase() + fileName.substring(1)).replace('-', ' ');
}

function removeFileExtension(fileName) {
  return fileName.substring(0, fileName.lastIndexOf('.'));
}

function run() {
  parseMarkdownFiles();
}

run();

const jsonData = JSON.stringify(posts);

fetch(`${MEILISEARCH_URL}/indexes/posts/documents`, {
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${process.env.MEILISEARCH_API_KEY}`,
  },
})
  .then(() => {
    console.log('successfully deleted documents');
  })
  .catch((err) => {
    console.error('failed to delete documents');
    console.error(err);
  });

fetch(`${MEILISEARCH_URL}/indexes/posts/documents`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.MEILISEARCH_API_KEY}`,
  },
  body: jsonData,
})
  .then(() => {
    console.log('successfully added or updated documents');
  })
  .catch((err) => {
    console.log('failed to add or update documents.');
    console.log(err);
  });
