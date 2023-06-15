const fs = require('fs')

let data = fs.readFileSync('./input.txt',{ encoding: 'utf8', flag: 'r' }).split('\n')
let total = 0;

for(let i = 0; i < data.length; i++){
    //lose condition
    if(data[i].includes('X')){
        if(data[i].includes('A')) total = total + 3
        if(data[i].includes('B')) total = total + 1
        if(data[i].includes('C')) total = total + 2
    }
    //draw condition
    if(data[i].includes('Y')){
        total = total + 3
        if(data[i].includes('A')) total = total + 1
        if(data[i].includes('B')) total = total + 2
        if(data[i].includes('C')) total = total + 3
    }
    //win condition
    if(data[i].includes('Z')){
        total = total + 6
        if(data[i].includes('A')) total = total + 2
        if(data[i].includes('B')) total = total + 3
        if(data[i].includes('C')) total = total + 1
    }
}

console.log(total)

//draw pairs: ax, by, cz
//win pairs: ay, bz, ca
