//TO READ THE COMPLETE TROUPE LIST

//import {Musician} from './Musician'
//import {Troupe} from './Troupe'
function readTroupe()
{
fs = require('fs')
fs.readFileSync('list.txt', 'utf8')
let display = fs.readFileSync('list.txt', 'utf8')
console.log(display);
}
module.exports = {readTroupe}