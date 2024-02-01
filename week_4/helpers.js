const fs = require('fs');

const readFileP = (fn) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fn, "utf8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }
)};

module.exports = { readFileP };