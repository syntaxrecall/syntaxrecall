const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fetch = require('isomorphic-unfetch');

const dataDir = path.join(process.cwd(), 'data');
const posts = [];

const MEILISEARCH_URL = process.env.MEILISEARCH_URL || 'http://localhost:7700';

console.log('Running generatePosts script...');

function parseMarkdownFiles() {
  fs.readdirSync(dataDir).forEach((folderName) => {
    const folderPath = path.join(dataDir, folderName);
    const isDirectory = fs.statSync(folderPath).isDirectory();

    if (isDirectory) {
        fs.readdirSync(folderPath).forEach((fileName) => {
        const filePath = path.join(folderPath, fileName);
        const fileData = fs.readFileSync(filePath, 'utf8');
        const jsonData = matter(fileData);

        if (!jsonData.data?.id) {
          throw Error(`file=${fileName} should have an id.`);
        }

        const subject = folderName.substring(0, 1).toUpperCase() + folderName.substring(1);
        const topic = getTopicFromFileName(fileName);
        const slug = `${folderName.toLowerCase()}/${removeFileExtension(fileName.toLowerCase())}`;
        const id = jsonData.data.id;
        const post = {
          id,
          subject,
          topic,
          slug,
          markdown: jsonData.content,
        };

        posts.push(post);
      });
    }
  });
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
