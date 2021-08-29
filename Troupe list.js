//import {Musician} from './Musician'
//import {Troupe} from './Troupe'
//To read troupelist from file
fs = require('fs')
fs.readFileSync('list.txt', 'utf8')

let display = fs.readFileSync('list.txt', 'utf8')
console.log(display);

/* export class Troupe{
    constructor(name, duration)
        this.name = name
        this.duration = duration

} */
//Adding a method to print summary and detailed descriptions
/* getSummary(){
    return this.name.getSummary
}
let music = new Musician("Robins", 3, 2)
let team = new Troupe("Name", 6)
console.table(Troupe.getMusician())
//CREATE A NEW TEAM
let myMap = new Map();

// ADD EMPLOYEES TO THE TEAM
myMap.set(1, "Troupe1");
myMap.set(2, "Troupe2");

//console.log(myMap);

//PRINT TEAM IN A TABLE
console.table(myMap); */
