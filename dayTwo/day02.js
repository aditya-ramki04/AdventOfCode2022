const fs = require('fs')

let data = fs.readFileSync('./input.txt',{ encoding: 'utf8', flag: 'r' }).split('\n')
let total = 0;

for(let i = 0; i < data.length; i++){
    //draw pairs
    if(data[i].includes('A X') || data[i].includes('B Y') || data[i].includes('C Z')) total = total + 3
    //win pairs
    if(data[i].includes('A Y') || data[i].includes('B Z') || data[i].includes('C X')) total = total + 6
    //rock, paper, scissors points
    if(data[i].includes('X')) total = total + 1;
    if(data[i].includes('Y')) total = total + 2;
    if(data[i].includes('Z')) total = total + 3;
}

console.log(total)

//draw pairs: ax, by, cz
//win pairs: ay, bz, ca
