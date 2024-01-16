const fs = require('fs');

fs.writeFile("cit.txt", "hello", (err) => {
    if (err) {
        return console.log(err);
    } 
    fs.readFile("cit.txt", "utf-8", (err, data) => {
        if (err) {
            return console.log(err)
        }
        console.log(data);
    })  
});


