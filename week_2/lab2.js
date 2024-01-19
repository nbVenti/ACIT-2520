const fs = require('fs')
const math =  require ('./mathHelpers.js')

fs.mkdir('dataPoints', { recursive: true }, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log("Directory created successfully!");
});

const processInput = (user_data, callback) => {
    if (user_data.length === 0) {
        return callback('Error: No data provided', null);
    } 
    for (let i = 0; i < user_data.length; i++) {
        // user_data[i] = parseInt(user_data[i]);
        if (Number(user_data[i]) !== parseInt(user_data[i])) {
            return callback('Error: Numbers only', null);
        } 
    }
    fs.mkdir('dataPoints', { recursive: true }, (err) => {
        if (err) {
            return console.error(err)
        }
        console.log("Directory created successfully!");
        fs.writeFile("dataPoints/points.txt", user_data.join(','), (err) => {
            if (err) {
                return callback(err, null);
            }
            console.log("File created successfully!");
            callback(null, math.distance(user_data[0], user_data[1], user_data[2], user_data[3]));
        });
    });
}

processInput(process.argv.slice(2), function(err, result) {
    if (err) {
        return console.log(err);
    }

    fs.appendFile("dataPoints/points.txt", `\nThe distance between your two points: (${process.argv[2]},${process.argv[3]}), (${process.argv[4]},${process.argv[5]}) is ${result}`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File updated successfully!");
    });
});