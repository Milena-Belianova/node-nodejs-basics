const PREFIX = '--';

const parseArgs = () => {
    // args.js - implement function that parses command line arguments (given in format --propName value 
    // --prop2Name value2, you don't need to validate it) and prints them to the console in the format 
    // propName is value, prop2Name is value2

    // const myArgs = process.argv.slice(2);
    // console.log(myArgs[0].slice(2) + ' is ' + myArgs[1]);
    // console.log(myArgs[2].slice(2) + ' is ' + myArgs[3]);

    const argsParts = process.argv.slice(2).reduce((acc, value, index, arr) => {
        if (value.startsWith(PREFIX)) {
            const formattedProp = `${value.replace(PREFIX, '')} is ${arr[index + 1]}`;
            return [...acc, formattedProp];
        }
        return acc;
    }, []);

    const stringifiedArgs = argsParts.join(', ');
    console.log(stringifiedArgs);
};

parseArgs();