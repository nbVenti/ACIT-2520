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

const writeFileP = (fn,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fn, data, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }
)};

readFileP("menu.csv")
    .then ((data) => {
        data = data.split("\n")
        let menu = []
        
        data.forEach((item) => {
            item = item.split(",")
            menu.push(item)
            
        })
        data = menu; menu = [];
        data.forEach((data) => {
            if (menu.includes(data[0]) === false) {
                menu.push(data[0])
            }})
        
        // sorting the CSV into the proper order
        for (let i = 0; i < data.length; i++) {
            if (data[i][0] == menu[menu.indexOf(data[i][0])]) {
                price = '$' + String(parseInt(data[i][3].replace("$","")) * 1.8) + "0"
                menu.splice(menu.indexOf(data[i][0]) + 1 , 0, [price +" "+ data[i][1] +" "+ data[i][2]])
                }
            }

        // formatting the final menu list
        for (i in menu) {
            if (typeof(menu[i]) === "string") {
                let x = menu[i].replace(menu[i][0],menu[i][0].toUpperCase())
                menu[i] = "* " + x + " Specials *"
                if ((i>=2)) {
                    menu[i] = "\n" + menu[i]
                }
            }
        }

        menu = menu.join("\n")
        
    
        

        writeFileP("menu.txt", menu)
            .then(() => {
                console.log("File written successfully")
            })
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((err) => {
        console.log(err)
    }
)