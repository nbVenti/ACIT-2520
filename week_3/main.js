const fs = require('fs')
const path = require('path')


const processInput = (user_data, callback) => {
    if (user_data.length === 0) {
        return callback('Error: No data provided', null);
    } 

    fs.readdir(user_data[0], function(err, files) {
        if (err) {
            return callback(err, null)
        }
    
        files.forEach (x => {
            if (path.extname(x) === user_data[1]) {
                return callback(null, x)
            }
        })
    })
};


processInput(process.argv.slice(2), function(err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(result)
});


module.exports = {processInput};