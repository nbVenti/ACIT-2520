const fs = require('fs/promises');
const { readFileP } = require('./helpers');


readFileP('file1.txt')
    .then (fileTwo =  readFileP(fileTwo))
    .then (fileThree =  readFileP(fileTwo))
    .then (fileFour =  readFileP(fileThree))
    .then (fileFive =  readFileP(fileFour))
    console.log(fileFive)
    .catch(err => console.log(err))


async function readFiles() {
    try {
        const fileOne = await fs.readFile("file1.txt");
        const fileTwo = await fs.readFile(fileOne);
        const fileThree = await fs.readFile(fileTwo);
        const fileFour = await fs.readFile(fileThree, "utf8");
        console.log(fileFour)
    
    } catch (error) {
        console.log(error)
    }
}

readFiles()

// function upper(text) {
//     return text.toUpperCase();
// }

// readFileP('file1.txt')
//     .then((content => upper(content)))
//     .then((content) => console.log(content))
//     .catch(err => console.log(err))




// fs.readFile('file1.txt',  (err, data) => 
//     { if (err) {console.log(err);}
//     fs.readFile(data,  (err, data2) => 
//         {  if (err) {console.log(err);}
//         fs.readFile(data2,  (err, data3) => 
//             { if (err) {console.log(err);}
//             fs.readFile(data3, "utf8", (err, data4) => 
//                 { if (err) {console.log(err);}
//                     console.log(data4)})})})});


// let data = null;
// fs.readFile('file1.txt',  (err, data) => {
//     if (err) return console.log(err);
//     data = data 
// });

// fs.readFile(data,  (err, data) => {
//     if (err) return console.log(err);
//     data = data 
// });

// fs.readFile(data,  (err, data) => {
//     if (err) return console.log(err);
//     data = data 
// });

// fs.readFile(data, "utf8", (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
// });



// let weather = "sunny";
// const myPromise = new Promise((resolve, reject) => {
//     if (weather === `sunny`) {
//         resolve('sunny')
//     } else {
//         reject('rainy')
//     }
// });


// myPromise.then((data) => {console.log(data)})
// myPromise.catch((err) => { console.log(err)})

/////////////////////////// 
// readFileP('file1.txt')
//     .then((file) => {
//     readFileP(file)
//     .then((file) => {
//     readFileP(file)
//     .then((file) => {
//     readFileP(file)
//     .then((file) => {
//     console.log(file)})
//     .catch((err) => {console.log(err)})})
//     .catch((err) => {console.log(err)})})})
//     .catch((err) => {console.log(err)})


// readFileP('file1.txt')
//     .then((file) =>  readFileP(file))
//     .catch((err) => {console.log(err)})
