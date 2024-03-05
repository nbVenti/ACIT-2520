const fs = require("fs")
const { EOL } = require("os")


const viewAllSupply = (coffeeType) => {
    if (coffeeType === "DR" || coffeeType === "MR" || coffeeType === "B") {
        fs.readFile("supply.txt", "utf-8", (err, data) => {
            if (err) return console.log(err)
            let count = 0
            data = data.split(EOL)        
            data.forEach(cType => {
                if (coffeeType === "DR"){
                    if (cType === "dark-roast") {
                        count++ 
                    }
                } else if (coffeeType === "MR"){
                    if (cType === "medium-roast") {
                        count++ 
                    }
                } else if (coffeeType === "B"){
                    if (cType === "blonde") {
                        count++ 
                    }
                }
            })
            console.log(count,coffeeType)
    })
    } else { console.log("Incorrect Value") }
}

const addSupply = (coffeeType) => {
    if (coffeeType === "DR" || coffeeType === "MR" || coffeeType === "B") {
        fs.readFile("supply.txt", "utf-8", (err,data) => {
            if (err) return console.log(err)
            data = data.split(EOL)
            if (coffeeType === "DR") {
                data.push("dark-roast")
                data = data.join(EOL)
                fs.writeFile("supply.txt", data, (err) => {
                    if (err) return console.log(err)
                    console.log("Wrote to file")
                })
            }
            if (coffeeType === "MR") {
                data.push("medium-roast")
                data = data.join(EOL)
                fs.writeFile("supply.txt", data, (err) => {
                    if (err) return console.log(err)
                    console.log("Wrote to file")
                })
            }
            if (coffeeType === "B") {
                data.push("blonde")
                data = data.join(EOL)
                fs.writeFile("supply.txt", data, (err) => {
                    if (err) return console.log(err)
                    console.log("Wrote to file")
                })
            }

            })
    
    } else { console.log("Incorrect Value") }   
}

const deleteSupply = (coffeeType, quantity) => {
    if (coffeeType === "DR" || coffeeType === "MR" || coffeeType === "B") {
        fs.readFile("supply.txt", "utf-8", (err, data) => {
            if (err) return console.log(err)
            data = data.split(EOL)
            let newData = null
            if  (coffeeType === "DR") {
                if (quantity === "*")  {
                    newData = data.filter(x => x !== "dark-roast")
                    
                } else {
                    for (i = 0; i <= quantity-1; i++) {
                        data.splice(data.indexOf("dark-roast"),1)
                    }
                }      
            }
            if  (coffeeType === "MR") {
                if (quantity === "*")  {
                    newData = data.filter(x => x !== "medium-roast")
                    
                } else {
                    for (i = 0; i <= quantity-1; i++) {
                        data.splice(data.indexOf("medium-roast"),1)
                    }
                }      
            }
            if  (coffeeType === "B") {
                if (quantity === "*")  {
                    newData = data.filter(x => x !== "blonde")
                    
                } else {
                    for (i = 0; i <= quantity-1; i++) {
                        data.splice(data.indexOf("blonde"),1)
                    }
                }      
            }
            
            if (newData) {data = newData.join(EOL)}
            data = data.join(EOL)
            fs.writeFile("supply.txt", data, (err) => {
                if (err) return console.log(err)
                console.log("Wrote to file")
            } )

    })
    } else { console.log("Incorrect Value") }

}

async function test () {
    try {
        await viewAllSupply("B")
        await addSupply("B")
        await viewAllSupply("B")
        await deleteSupply("B", 2)
        await viewAllSupply("B")
        await console.log("Program is completed")
    } catch {
        pass
    }
}

test()