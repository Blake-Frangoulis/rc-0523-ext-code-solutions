import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const data = await readFile('dijkstra.txt', 'utf8');
    console.log('File read successfully:', data);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

readDijkstra();
