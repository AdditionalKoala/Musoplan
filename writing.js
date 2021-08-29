//WRITING TO FILE




const Guitarist =require('./Musician.js')
fs = require('fs');//call for modules for writing to a text file
filename='temp.txt' // specify filename in current folder
var buffer = ' ' //Initialise a variable to catch the string from the getDetails function

Instru1 = new Guitarist("Smita", 5, 90); //Write first musician's details to a text file
buffer = Instru1.getDetails() //Store the output of the getDetails function

fs.writeFile(filename, buffer, 'utf-8', function (err) {
    if (err) return console.log(err);
});
  
Instru2 = new Guitarist("Ajay", 7, 80); //Append all other musicians' details to the same text file
buffer = Instru2.getDetails() //Update with the output of getDetails function
fs.appendFile(filename, buffer, 'utf-8', function (err) {
    if (err) return console.log(err);
});

