const { X12parser } = require('x12-parser');
const { createReadStream } = require('fs');

// Create a new parser
const myParser = new X12parser('utf8');
myParser.on('error', (err: any) => {
    console.error(err);
});

// Create a read stream from a file
const ediFile = createReadStream('edi.txt');
ediFile.on('error', (err: any) => {
    console.error(err);
});

// Handle events from the parser
ediFile.pipe(myParser).on('data', (data: any) => {
    console.log(data);
});