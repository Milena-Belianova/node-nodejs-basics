import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const decompress = async () => {
    // decompress.js - implement function that decompresses 'archive.gz' back to the 'fileToCompress.txt' 
    // with same content as before compression using zlib and Streams API

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, './files', 'fileToCompress.txt');
    const archiveFilePath = path.join(__dirname, './files', 'archive.gz');

    await pipeline(createReadStream(archiveFilePath), createGunzip(), createWriteStream(filePath));
};

await decompress();