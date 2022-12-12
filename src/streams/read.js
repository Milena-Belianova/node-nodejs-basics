import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const read = async () => {
    // read.js - implement function that reads file 'fileToRead.txt' content using Readable Stream 
    // and prints it's content into process.stdout

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let dest = path.join(__dirname, './files', 'fileToRead.txt');

    const readable = fs.createReadStream(dest);
    readable.pipe(stdout);
};

await read();