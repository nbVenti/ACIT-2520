const  ndjson = require('ndjson');
const fs = require('fs');
const { pipeline } = require('stream');

// Create a readable stream from the  ndjson file
const readStream = fs.createReadStream('data.ndjson');

// Parse the  ndjson stream
const parseStream =  ndjson.parse();

// Handle the data events from the parsed stream
parseStream.on('data', (obj) => {
  console.log(obj); // Log each parsed object
});

// Pipe the read stream into the parse stream
pipeline(
    readStream, 
    parseStream, 
    (err) => {
    if (err) {
        console.error('Pipeline failed.', err);
    } else {
        console.log('Pipeline succeeded.');
    }
    })
