import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const compress = async () => {
    // compress.js - implement function that compresses file 'fileToCompress.txt' to 
    // 'archive.gz' using zlib and Streams API

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, './files', 'fileToCompress.txt');
    const archiveFilePath = path.join(__dirname, './files', 'archive.gz');
    const source = createReadStream(filePath);
    const destination = createWriteStream(archiveFilePath);

    await pipeline(source, createGzip(), destination);

};

await compress();