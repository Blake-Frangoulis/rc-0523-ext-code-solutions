import { readFile } from 'node:fs/promises';

async function readAny(filePath) {
  try {
    const data = await readFile(filePath, 'utf-8');
    console.log('File read successfully:', data);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

const filePath = process.argv[2];
readAny(filePath);
