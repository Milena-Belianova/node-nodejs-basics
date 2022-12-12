import { fileURLToPath } from 'url';
import path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'node:stream/promises';
import { stdin } from 'node:process';

const write = async () => {
    // write.js - implement function that writes process.stdin data into file 'fileToWrite.txt' 
    // content using Writable Stream

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let filePath = path.join(__dirname, './files', 'fileToWrite.txt');

    const writable = createWriteStream(filePath, { flags: 'a' });
    await pipeline(stdin, writable)

};

await write();