import path from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    // calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt 
    // and logs it into console as hex
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let dest = path.join(__dirname, './files', 'fileToCalculateHashFor.txt');

    const data  = await readFile(dest);
    const hash = createHash('sha256');
    hash.update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();