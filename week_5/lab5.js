const { pipeline, Transform } = require('stream');
const fs = require('fs');
const  ndjson = require('ndjson')
const compare = require("./database.js");



const read = fs.createReadStream("C:\\Desktop\\term 2\\Files for js\\Cell_Phones_and_Accessories.ndjson"); // change value 
const write = fs.createWriteStream("C:\\Desktop\\term 2\\Files for js\\output.txt"); // change value

const parseStream = ndjson.parse();

const filterSpam = new Transform({
  objectMode: true,
  transform: function (chunk, _, push) {
    if (chunk["class"] === 0.0) {
      push(null, chunk['reviewText'])
    } else {
      push(null)
    
    }
  }
});  

const checkPos = new Transform({
  objectMode: true,
  transform: function (chunk, _, push) {
    score = 0
    word = chunk
    chunk = chunk.toString().replace(/[!.'"?]/g,'').toLowerCase().split(" ")
    console.log(chunk)
    chunk.forEach(item =>{
      item = item.replace(".","").replace(" ","").toString()
      if (compare.hasOwnProperty(item)) {
        score += compare[item]
      } 

    })
    push(null, word+" Score:"+score+"\n")
    
  }
})


pipeline(
  fs.createReadStream("data.ndjson")
    .pipe(parseStream),
  filterSpam,
  checkPos,
  fs.createWriteStream('output.txt'),
  (err) => {
    if (err) {console.log("Pipeline failed.\n >>>", err);} 
    else 
      {console.log('Pipeline succeeded.');}
  }
);





