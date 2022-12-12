import { rm } from 'node:fs/promises';

const remove = async () => {
    // delete.js - implement function that deletes file 'fileToRemove.txt' (if there's no 
    // file 'fileToRemove.txt' Error with message 'FS operation failed' must be thrown)
};
try {
    await rm('./files/fileToRemove.txt')
} catch (err) {
    throw Error('FS operation failed');
}

await remove();