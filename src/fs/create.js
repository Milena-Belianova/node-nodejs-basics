import { writeFile } from 'node:fs/promises';
import { readFile, appendFile } from 'node:fs/promises';

const create = async () => {
    //implement function that creates new file fresh.txt with content 
    //I am fresh and young inside of the files folder (if file already 
    //exists Error with message FS operation failed must be thrown)

    // try {
    //     await readFile('./files/fresh.txt', 'utf8');
    //     throw Error;
    // } catch (err) {
    //     if (err.code === 'ENOENT') {
    //         await appendFile('./files/fresh.txt', 'I am fresh and young');
    //     } else {
    //         throw Error('FS operation failed');
    //     }
    // }

    try {
        await writeFile('./files/fresh.txt', 'I am fresh and young', { flag: 'wx' })
    } catch (err) {
        throw Error('FS operation failed');
    }
    
};

await create();