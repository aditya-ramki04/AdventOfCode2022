const fs = require('fs')

let data = fs.readFileSync('./input.txt',{ encoding: 'utf8', flag: 'r' }).split('\n\n')

let arr = []

for(let i = 0; i < data.length; i++){
    data[i] = data[i].split('\n')
    data[i] = data[i].map(Number)
    arr.push(data[i].reduce((a, b) => a + b, 0))
}

arr.sort((a, b) => b - a);

let res = arr[0]+arr[1]+arr[2]

console.log(res)
