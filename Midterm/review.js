// Midterm REVIEW!!!!!!!!!

/* 
Major Topics

Big Picture:
    Runtime environments, compilers, interpreters
        What does a runtime enevironment include?
        - Translator (Interpreter/Compiler)
        - APIs (functions that allow our programming language to interact with its environment)
            -> all node.js API works in translator but not web (NODE.JS)
            -> fs.writeFile, os.cpus

            -> API that exists in browser but not in node.js (BROWSER)
            -> alert(); any DOM method (getelementbyid)

Asynchronous and Synchronous Code
    Conceptually, what is the difference
        - sync code blocks anything else from running (for loops; nothing runs till its done)
        - async code doesnt block anything from running (console.log)

    How do we know if code is Async or sync
        - if a function receives a callback, then its a async
    
        [1,2,3].forEach((num) => console.log(num))
        console.log("Hi bcit")
            - forEach is synchronous and (can) use a callback, so callback doesnt necessarily mean its async

        1) is the function im calling imported from node.js?
            yes -> does this function NOT have the word sync
                yes -> async
        
            anything else -> maybeeee

    Whats the problem with sync code
        -it blocks the mf program
        THINGS NOT TO DO SYNCHRONOUSLY
            - anything relating to hard drive or fs
            - anything communication over network

    what are the alternatives to async code
        - multithreading (distribute load across cpu cores) -> cost a lot of memory

    Different flavours of async: callbacks vs promises
        - 

    Is a JS a compiled or an interpreted language?
        - combination of both
        - just in time compilation JIT (same input same output)
        - function never changes, so it can just run the same machine code
        - everything is interpreted and it comes across a function it can compile, it will compile

        JIT compilation, or Just-In-Time compilation, is a technique used in programming languages like JavaScript 
        to improve performance. Instead of translating the entire code upfront (compilation) or executing it line by 
        line (interpretation), JIT compilers analyze and selectively compile parts of the code at runtime, making it 
        run faster.

    Difference between compiled and interpreted language
        - if its compiled, we get executable
    
    console.log("fortnite")
    console.logz("fortnite")
    console.log("fortnite")

        - if JS is a compiled language, no output because it detects an error in the code
        - if interpreted, the first fortnite will log (cuz it goes one by one) 

        - compilers check for errors first

Promises
    deferred promises execution pattern (return new promise resoluve reject)
    converting promises from .then to await (async syntax)

Core Node.js built-in modules

Npm and working with third-party packages
*/

// cb for callback
function sum(num1, num2, cb)  {
    if (typeof num1 != "number" || typeof num2 != "number"){
        cb("please provide numbers")
    } else {
        cb(null, num1 + num2)
    }
} 

// the last argument here is a callback function
FileSystem.readFile("hi.txt", "utf-8", (err,data))

// do the same to anything to make it a callback
sum(5,4, (err, result) => {
    if (err) return console.log(err)
    console.log(result)
})


// executing syncronously with error handling
const fs = require("fs/promises")
try {
    const data = fs.readFileSync("hello.txt")
    fs.writeFileSync("hello.txt", "hO")
    console.log(data)
} catch (error) {
    console.log(error)
}

// no try catch with async callback function
// every async callback function returns nothing / void
// if you are reading two files, dont nest because it will make it sync, you want efficiency so sync makes slower

// can only have 4 async functions running on one thread
// here both readFiles are async, so both will be running at the same time
fs.readFile("hello.txt", "utf8", (err,data) => {
    if (err) return console.log(err)
    console.log(data)
})

fs.readFile("bye.txt", "utf8", (err,data) => {
    if (err) return console.log(err)
    console.log(data)
})

// callbacks

// create a function called writeSquare
// writeSquare(2) -> square the numberr and write to a file called square.txt
function writeSquare(num, cb) {
	const square = (num * num).toString();
	const filename = 'square.txt'
	fs.writeFile(filename, square, 'utf8', (err) => {
		if (err) { return console.log(err) }
		else { cb(filename) }
	})
}
// create function called readSquare()
// readSquare("square.txt") ->read the file and print
// console.log that sdays program finished

function readSquare(filename) {
	fs.readFile(filename, 'utf8', (err, data) => {
		if (err) { return console.log(err) }
		else { console.log(data) }
	})
}

// using promises
async function writeSquareP(num) {
	if (typeof num !== "number") {
		throw new Error ("Please enter a number")
	} else {
        const square = (num * num).toString()
        return fs.writeFile('file.txt', square, 'utf8')
    }
}

async function readSquareP() {
	return await fs.readFile('file.txt', 'utf8')
}

writeSquareP(6)
	.then(() => { return readSquareP()	})
	.then((result) => console.log(result))
	.catch((err) => {
		console.log(err)
	})

// automatic join paths
const path = require("path")
const myPath = path.join(__dirname, "datapoints", "points.txt")
// dataPoints/points.txt
// __dirname starts at c drive, absolute path

const { EOL } = require("os");
csv.split(EOL)
// this is how you split at new lines, use EOL not \n

// what is purpose of package.json
// you and your team can look at what library / packages / dependencies yall using

// whenever you npm install package, where installed to?
// installed to your folder for this specific project