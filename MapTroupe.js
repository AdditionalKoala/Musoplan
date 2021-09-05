


//ADD A TROUPE
//CALCULATE TROUPE COST
//WRITE TROUPE NAMES TO TEXT FILE
//=================

fs = require('fs');
const prompt = require('prompt-sync')()
let loop=prompt("How many troupes do you wish to create today?    ")
var troupeArray = [];

for (let x=1; x<=loop; x++)
    {
    var Troupe = new Map;
    let z=x-1;
    console.log("Enter troupe "+x+"'s details: ")//Taking user inputs for troupe properties
    let troupename=prompt("Enter troupe name  ")
    let instrunum=prompt("Enter number of instruments (1-5) ")
    let troupegenre=prompt("Enter the genre (rock/pop/jazz) ")
    let trouperate=prompt("Enter the hourly rate  ")
    let troupeduration=prompt("Enter the duration .5-3 hrs  ")
    var troupeDetails={
                name:troupename,
                instruments:instrunum,
                genre:troupegenre,
                rate:trouperate,  
                duration: troupeduration }
    Troupe.set(troupeDetails.name, troupeDetails); 
    troupeArray.push(Troupe);
    let val = JSON.stringify(troupeArray[z].get(troupeDetails.name))
    val = val.replace(/"/g,'');
    val = val.replace(/,/g,'\t');
    if(z==0){
    fs.writeFile("troupelist.txt",troupeDetails.name+"\n", 'utf-8', function (err) {
        if (err) return console.log(err);//writes the following troupe names to file
        });
    fs.writeFile("descriptions.txt",val+"\n", 'utf-8', function (err) {
        if (err) return console.log(err);//writes the troupe details to a file
        });
    }
    else{
        fs.appendFile("troupelist.txt",troupeDetails.name+"\n", 'utf-8', function (err) {
            if (err) return console.log(err);//writes the following troupe names to file
            });
        fs.appendFile("descriptions.txt",val+"\n", 'utf-8', function (err) {
            if (err) return console.log(err);//writes the troupe details to a file
            });
        }
    let cost = troupeDetails.rate *troupeDetails.duration
    console.log("The cost of engaging the "+troupeDetails.name+" troupe would be  "+ cost + " dollars\n")
        }
    console.log("Troupe names have been written to the file troupelist.txt"+"\nType cat troupelist.txt to view contents\n")
    console.log("Troupe details have been written to the file descriptions.txt"+"\nType cat descriptions.txt to view contents\n")


