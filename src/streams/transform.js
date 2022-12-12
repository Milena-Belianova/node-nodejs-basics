import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';

const reverseStr = (str) => str.split('').reverse().join('');
class MyTransformStream extends Transform {
    _transform(chunk, encoding, callback) {
        callback(null, reverseStr(chunk.toString()));
    }
}

const transform = async () => {
    // transform.js - implement function that reads data from process.stdin, reverses text 
    // using Transform Stream and then writes it into process.stdout

    const transformStream = new MyTransformStream();

    await pipeline(stdin, transformStream, stdout);
};

await transform();