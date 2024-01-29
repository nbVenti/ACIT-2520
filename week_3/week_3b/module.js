const proIp = require("./main.js")

const startProIp = (x, y) => {
    proIp.processInput(x, y, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log(result);
    });
};

startProIp(process.argv[2], process.argv[3]);