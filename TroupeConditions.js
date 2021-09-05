//CHECKING USER INPUTS FOR 'TROUPE' AGAINST PRE-DEFINED CONSTRAINTS
//CALCULATING TROUPE COSTS, IF THE USER WANTS

const prompt = require('prompt-sync')()

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
while (!(genre == 'rock') || (genre == 'pop') || (genre == 'jazz'))
{
  genre=prompt("Re-enter the genre (rock/pop/jazz) ")
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
let Troupe=['',2,'',2,2]
Troupe[0]=name
Troupe[1]=parseInt(instruments);
Troupe[2]=genre;
Troupe[3]=parseInt(rate);
Troupe[4]=parseInt(duration);
var choice4=prompt("Do you wish to calculate the cost of troupe? y/N ")
if(choice4=='y')
{
  console.log("The cost of engaging the troupe would be "+Troupe[3]*Troupe[4])
}
else
{
  console.log("No worries. We'll leave the calculations to another time")
}
let text = Troupe.toString()
let text1 = "Troupe details are as follows:\n"+text
console.log(text1)
//return text1





