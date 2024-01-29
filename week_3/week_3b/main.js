const fs = require('fs')
const path = require('path');



const processInput = (filePath, fileExt, callback) => {
    if (filePath.length === null || fileExt.length === null) {
        return callback('Error: No data provided', null);
    } 

    fs.readdir(filePath, function(err, files) {
        if (err) {return callback(err, null)}
    
        files.forEach (x => {
            if (path.extname(x) === "."+fileExt) {
                return callback(null, x)} 
            
            
        })
    })
};

module.exports = { processInput }; 