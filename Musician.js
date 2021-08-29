
class Musician{
    constructor(musname, yrsplaying, hrlyrate)
    {
    this.musname = musname;
    this.yrsplaying = yrsplaying;
    this.hrlyrate = hrlyrate;
    }
   getMusicianDetails()
    {
        let str1 = " with "+this.yrsplaying+" years of experience and an hourly rate of "+this.hrlyrate
        return str1
    }
    getName()
    {
        return this.musname
    }
    getYearsOfPlaying()
    {
        return this.yrsplaying
    }
    getHourlyRate()
    {
        return this.hrlyrate
    }
}

class Guitarist extends Musician 
{
    constructor(musname, yrsplaying, hrlyrate) 
    {
        super(musname, yrsplaying, hrlyrate) // Inheriting the Musician fields in the super class  'Musician'
        this.interestingFact = " "
    }
    getDetails()
    {
        this.interestingFact = "The more strings you have, the better you are" // Assign 'Guitarist' specific 'interesting fact'
        let str3 = this.musname + " is a guitarist"
       let str2 = "\n"+this.interestingFact + "\n" + str3 + super.getMusicianDetails()
        return str2
    }
}

module.exports = Guitarist
