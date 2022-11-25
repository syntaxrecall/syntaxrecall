const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fetch = require('isomorphic-unfetch');

const dataDir = path.join(process.cwd(), 'data');
const posts = [];

const BASE_URL = process.env.BASE_URL || 'http://localhost:7700';

console.log('Running generatePosts script...');

function parseMarkdownFiles() {
  fs.readdirSync(dataDir).forEach((fileName) => {
    const fileData = fs.readFileSync(path.join(dataDir, fileName), 'utf8');
    const jsonData = matter(fileData);
    const id = fileName.substring(0, fileName.lastIndexOf('.'));

    const post = {
      id,
      markdown: jsonData.content,
    }

    posts.push(post);
  });
}

parseMarkdownFiles();

const jsonData = JSON.stringify(posts);

fetch(`${BASE_URL}/indexes/posts/documents`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
}).then(() => {
  console.log('success!');
})
.catch((err) => {
  console.log('failed!');
  console.log(err);
});

