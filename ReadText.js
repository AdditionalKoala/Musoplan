//READ TROUPE NAMES FROM TEXT FILE
//READ TROUPE DETAILS FROM TEXT FILE
//=================

fs = require('fs');
const prompt = require('prompt-sync')()
console.log("What do you wish to access from the text file today? \n1. Troupe list \n2. Troupe details \n    ")
let loop=prompt("?\t")

    if(loop==1){
        fs.readFileSync('troupelist.txt', 'utf8')
        let display1 = fs.readFileSync('troupelist.txt', 'utf8')
        console.log(display1);}
    else if(loop==2){
        fs.readFileSync('descriptions.txt', 'utf8')
        let display2 = fs.readFileSync('descriptions.txt', 'utf8')
        console.log(display2);}
    else{
        console.log("Invalid input")
        }