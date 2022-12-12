import { cp } from 'node:fs/promises';

const copy = async () => {
    // copy.js - implement function that copies folder 'files' files with all its content into folder 
    // 'files_copy' at the same level (if 'files' folder doesn't exists or 'files_copy' has already been created 
    // Error with message 'FS operation failed' must be thrown)
    try {
        await cp('./files', './files_copy', {errorOnExist: true, force: false, recursive: true});
    } catch (err) {
        throw Error('FS operation failed');
    }
    
};

await copy();
