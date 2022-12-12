import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
    // rename.js - implement function that renames file 'wrongFilename.txt' to properFilename 
    // with extension .md (if there's no file 'wrongFilename.txt' or 'properFilename.md' already 
    // exists Error with message 'FS operation failed' must be thrown)
    try {
        await renameFile('./files/wrongFilename.txt', './files/properFilename.md');
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await rename();