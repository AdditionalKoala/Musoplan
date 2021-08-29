//import Guitarist from './Musician'
const Guitarist =require('./Musician.js')

let Musician1 = new Guitarist("Robins", 3, 2)
let Musician2 = new Guitarist("Smita", 30, 20)
//let Musician3 = new Guitarist("Grace", 300, 200)
//let Musician4 = new Troupe("Name", 6)
//console.table(Troupe.getMusician())
//CREATE A NEW TEAM
let myMap = new Map();

// ADD EMPLOYEES TO THE TEAM
myMap.set(1, Musician1);
myMap.set(2, Musician2);

//console.log(myMap);

//PRINT TEAM IN A TABLE
console.log(myMap);

