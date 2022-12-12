import { readFile } from 'node:fs/promises';

const read = async () => {
    // read.js - implement function that prints content of the fileToRead.txt into console 
    // (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
    try {
        const fileContent = await readFile('./files/fileToRead.txt', 'utf8');
        console.log(fileContent);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await read();