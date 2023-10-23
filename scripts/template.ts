import { input } from '@inquirer/prompts';
import { join } from 'path';
import * as fs from 'fs/promises';
import * as crypto from 'crypto';

async function main(): Promise<void> {
  const fileName = await input({ message: 'Enter file name' });
  const title = await input({ message: 'Enter title' });
  const description = await input({ message: 'Enter a description' });
  const dataDir = join(process.cwd(), 'data');

  const headerArray = [
    '---',
    `id: ${crypto.randomUUID()}`,
    `title: ${title}`,
    `keywords: ["${title.toLowerCase()}"]`
  ];

  if (description) {
    headerArray.push(`description: ${description}`);
  }

  headerArray.push('---');
  headerArray.push('\nTable of contents\n[[toc]]');

  fs.writeFile(join(dataDir, fileName.toLowerCase() + '.md'), headerArray.join('\n') + '\n');
}

main();
