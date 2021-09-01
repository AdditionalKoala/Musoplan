


//ADD A MUSICIAN
//=================
const prompt = require('prompt-sync')()

console.log("What do you wish to do today. Choose from the below list:\n1. Create musician    \n2. Create troupe \n3. Add musician to troupe  \n4. Provide summary of troupe  \n5. Provide detailed description of troupe   \n6. Calculate the costs of engagement  \n7. Read the list of troupe names  \n8. Write detailed descriptions for all troupes to a file  ")
let choice=prompt("?")

switch(choice){
    case '1': //Create musician
    let num=prompt("How many musicians do you wish to create today?    ")
    var musArray = [];
    for (let x=1; x<=num; x++)
    {

        var Instrumentalist = new Map;
        console.log("Enter musician "+x+"'s details: ")
        console.log("What's the instrument he/she plays? Choose from the below list:\n1. Guitarist    \n2. Bassist \n3. Percussionist  \n4. Flautist  ")
        let choices=prompt("? ")

        switch(choices){

            case '1': //Guitarist
            var choice1=prompt("Enter guitarist's name ")
            var choice2=prompt("Enter years of exp  ")
            var choice3=prompt("Enter hourly rate   ")
            var details={
                name:choice1,
                yrs:choice2,
                rate:choice3,
                instrument:"Guitarist",  
                fact: "The more strings you have, the better you are"  }
            Instrumentalist.set(details.name, details);
            musArray.push(Instrumentalist);
            break;

            case '2': //Bassist            
            choice1=prompt("Enter bassist's name ")
            choice2=prompt("Enter years of exp  ")
            choice3=prompt("Enter hourly rate   ")
            var details={
                name:choice1,
                yrs:choice2,
                rate:choice3,
                instrument:"Bassist",  
                fact: "Everyone loves a bassist"  }
            Instrumentalist.set(details.name, details);
            musArray.push(Instrumentalist);
            break;

            case '3': //Percussionist
            choice1=prompt("Enter percussionist's name ")
            choice2=prompt("Enter years of exp  ")
            choice3=prompt("Enter hourly rate   ")
            var details={
                name:choice1,
                yrs:choice2,
                rate:choice3,
                instrument:"Percussionist",  
                fact: "Me drum"  }
            Instrumentalist.set(details.name, details);
            musArray.push(Instrumentalist);
            break;

            case '4': //Flautist
            choice1=prompt("Enter flautist's name ")
            choice2=prompt("Enter years of exp  ")
            choice3=prompt("Enter hourly rate   ")
            var details={
                name:choice1,
                yrs:choice2,
                rate:choice3,
                instrument:"Flautist",  
                fact: "1989 heavy metal instrument of the year"  }
            Instrumentalist.set(details.name, details);
            musArray.push(Instrumentalist);
            break;
            
            default:
                console.log("Incorrect response")
            }
    }
    //The iteration below helps to view the instrumentalists stored
    console.log("Here's the list of musicians you just added:")
    for(y=0; y<num; y++)
    {
        console.log(musArray[y])
    }
// let neededMus=Instrumentalist.get(musArray[y])
// console.log(neededMus)
    
    break;

    default:
    console.log("See you later")
}