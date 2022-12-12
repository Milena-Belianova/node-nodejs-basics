import { readdir } from 'node:fs/promises';

const list = async () => {
    // list.js - implement function that prints all array of filenames from files 
    // folder into console (if files folder doesn't exists Error with message 
    // 'FS operation failed' must be thrown)
    try {
        const content = await readdir('./files');
        console.log(content);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await list();