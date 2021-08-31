//import { Musician } from "./Musician"
//export


function createTroupe()
{
let name=prompt("Enter troupe name  ")
while((name.length<3) || (name.length>30))
{
  name=prompt("Re-enter name (3-30 characters)")
}
let instruments=prompt("Enter number of instruments (1-5) ")
while((instruments<=0) || (instruments>5))
{
  instruments=prompt("Enter number of instruments again (1-5) ")
}
let genre=prompt("Enter the genre (rock/pop/jazz) ")
/* while((genre !== 'rock') || (genre !== 'pop') || (genre !== 'jazz'))
{
  genre=prompt("Re-enter the genre (rock/pop/jazz) ")
}
 */
let rate=prompt("Enter the hourly rate  ")
while(rate < 50)
{
  rate=prompt("Re-enter the rate (>=50) ")
}
let duration=prompt("Enter the duration .5-3 hrs  ")
while((duration<0.5) || (duration >3))
{
  duration=prompt("Re-enter the duration .5 - 3 hrs ")
}
let Troupe=['',2,'',2,2]
Troupe[0]=name
Troupe[1]=parseInt(instruments);
Troupe[2]=genre;
Troupe[3]=parseInt(rate);
Troupe[4]=parseInt(duration);
let text = Troupe.toString()
let text1 = "Troupe details are as follows:\n"+text
console.log(text1)
return text1
}



function troupeCost()
{
  let name=prompt("Enter troupe name  ")
  while((name.length<3) || (name.length>30))
  {
    name=prompt("Re-enter name (3-30 characters)")
  }
    let rate=prompt("Enter the hourly rate  ")
  while(rate < 50)
  {
    rate=prompt("Re-enter the rate (>=50) ")
  }
  let duration=prompt("Enter the duration .5-3 hrs  ")
  while((duration<0.5) || (duration >3))
  {
    duration=prompt("Re-enter the duration .5 - 3 hrs ")
  }
  let Troupe=['',2,2]
  Troupe[0]=name
  Troupe[1]=parseInt(rate);
  Troupe[2]=parseInt(duration);  
let cost = Troupe[1]*Troupe[2]
let costtext = "The cost of engaging the troupe "+Troupe[0]+ " for this duration "+" would be "+ cost + " dollars"
console.log(costtext)
return costtext
}


function writeTroupe()
{  
  fs = require('fs');
  const prompt = require('prompt-sync')()
  
let text = createTroupe()
fs.writeFile("list.txt",text, 'utf-8', function (err) {
  if (err) return console.log(err);
});
}



module.exports ={createTroupe, troupeCost, writeTroupe}

/* //const inquirer = require('inquirer');
var troupe = {
    name: '',
    genre: '',
    rate: ''
};
troupe1 = new troupe
 troupe.name = prompt("Enter the troupe name  ");
 troupe.genre = prompt("enter the genre  ");
 troupe.rate = prompt("enter your rate  ");
 console.log(troupe) */

 /* 
 const questions = [{
    type: 'input',
    name: 'name',
    message: "What's the troupe name?",
    validate(value) {
      const pass = value.length;
      if (pass<30) {
          troupe.name = value
          console.log("Saved troupe name as "+troupe.name)
        return value;
      }
      return 'Please enter a valid name';
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number\n';
    },
    filter: Number,
  },
  when(answers)
];
inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
  }); */
/*   let name=prompt("Enter your name  ")
  let Instruments=prompt("Enter number of instruments ")
  let genre=prompt("Enter the genre (rock/pop/jazz) ")
  let rate=prompt("Enter the hourly rate  ")
  let duration=prompt("Enter the duration  ")
  let obj = {
    name:name, 
    Instruments:Instruments, 
    genre:genre, 
    rate:rate, 
    duration:duration
  }

class Troupe{
    constructor({'troupename','numInstru','genre', 'duration', 'rate'})
    {
        this.troupename = troupename
        this.numInstru = numInstru
        this.genre = genre
        this.duration = duration
        this.rate = rate
    } */
//Adding a method to print summary and detailed descriptions
//Troupe1= new Troupe(obj)


/* getSummary()
{
  let cost = this.rate*this.duration
    let summary = "The troupe's name is "+this.troupename+ "\n"+this.troupename+" play "+this.noInstru+
    " instruments in the "+this.genre+" genre."+"\n"+"They charge an hourly rate of "+this.rate+" dollars"+"\n"+
    "and can be signed on, for a minimum period of "+this.duration+" hours."+ "\n"+"The cost will therefore be "+cost
    return summary
} */


/* let num1=window.prompt("Enter first number");
let input1=parseInt(num1); */
/* let num2=prompt("Enter second number");
let input2=pareseInt(num2)
let sum=num1+num2
console.log(sum)  */



/* "The Beatles", 4, "Rock", 5, 600
console.log(Troupe1.getSummary())
console.log(Troupe1.getDetailed())
console.log(Troupe1.AddMusician()) */