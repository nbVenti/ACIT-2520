// const { argv } = require("process")

// const x1 = argv(2);
// const y1 = argv(3);
// const x2 = argv(4);
// const y2 = argv(5);

// console.log(x1,y1,x2,y2)

// let squareRoot = num => return Math.sqrt(num);

// let square = num => return num * num; 

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// fs.writeFile("myFile.txt", "some content", (err) =>  {
//      if (err) {
//         console.log(err);
//     } else {
//         fs.readFile("myFile.txt", (err,data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(data)
//             }
//         })
//     }  
// })

const writeFileP = (file,content) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(file, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
   });
};

writeFileP("myFile.txt", "hi")
  .then(() => console.log("operation complete"))
  .catch((err) => console.log(err))