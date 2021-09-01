


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
    let dummy=JSON.stringify(troupeArray[0]);
    let strdummy=dummy + ''
    let dummy2=JSON.stringify(troupeArray[1]);
    let strdummy2=dummy2 + ''
    if (x==1){
    fs.writeFile("troupelist.txt",troupeDetails.name+"\n", 'utf-8', function (err) {
        if (err) return console.log(err);//writes first troupe name to file
        });
    
    fs.writeFile("descriptions.txt",strdummy+"\n", 'utf-8', function (err) {
            if (err) return console.log(err);//writes the first troupe details to a file - lookup writing objects to file
            });
        }
    else{
        fs.appendFile("troupelist.txt",troupeDetails.name+"\n", 'utf-8', function (err) {
            if (err) return console.log(err);//writes the following troupe names to file
            });
        fs.appendFile("descriptions.txt",strdummy2+"\n", 'utf-8', function (err) {
            if (err) return console.log(err);//writes the troupe details to a file - lookup writing objects to file
            });}
    
    let cost = troupeDetails.rate *troupeDetails.duration
    console.log("The cost of engaging "+troupeDetails.name+" would be  "+ cost + " dollars\n")
        }
    //Troupe.set(troupeDetails.name, troupeDetails);
    console.log("Here's the list of troupes you just added:")
    for(y=0; y<loop; y++)
    {
        console.log(troupeArray[y])
    }
    console.log("Troupe details have been written to the file troupelist.txt"+"\n Type cat troupelist.txt to view it\n")











//     let buffer=prompt("Do you wish to read from file? 1/2  ")
// if(buffer=='1'){
//     let display = fs.readFile("troupelist.txt", 'utf-8', function (err) {
//        if (err) return console.log(err);
//      });
//     // fs.readFileSync('troupelist.txt', 'utf8')
//     // let display = fs.readFileSync('troupelist.txt', 'utf8')
//     console.log(display);}
//     else{
//         console.log("no worries")
//     }

   


//let neededTroupe=Troupe.get(troupeArray[0])
//console.log(neededTroupe)

// fs.writeFile("troupelist.txt",troupeDetails.name, 'utf-8', function (err) {
// if (err) return console.log(err);
// });
// for (let y=1;y<troupeArray.length;y++){
//     console.log(troupeArray[y])
//     neededTroupe=Troupe.get(troupeArray[y])
//     // fs.writeFile("list.txt",neededTroupe, 'utf-8', function (err) {
//     //     if (err) return console.log(err);
//     //   });
// }
