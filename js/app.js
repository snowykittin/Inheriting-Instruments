/*Summer Sexton
N320
September 7, 2022*/

let currentInstrument = 0;


class Instruments{
    constructor(loudness, family, play){
        this.loudness = loudness;
        this.family = family;
        this.play = play;
    }
    
    
    synth = new Tone.Synth().toDestination();
    over(){
        this.synth.triggerRelease(0, duration);
        this.activatedCallback();
    }
    playSound(duration){
        this.synth.triggerAttackRelease("A4", duration);
        console.log(this.family + " " + this.play + " at " + this.loudness);
        this.activatedCallback = this.over;
    }
}

class Woodwind extends Instruments{
    constructor(loudness){
        super(loudness, "Woodwind", "blows");
        this.loudness = loudness;
    }
}

class String extends Instruments{
    constructor(loudness){
        super(loudness, "String", "bows");
        this.loudness = loudness;
    }
}

class Percussion extends Instruments{
    constructor(loudness){
        super(loudness, "Percussion", "drums");
        this.loudness = loudness;
    }
}

let flute = new Woodwind("50 db");
let violin = new String("40 db");
let drum = new Percussion("80 db");

var instrumentArray = [flute, violin, drum];


function playNext(){
    instrumentArray[currentInstrument].playSound(0.5);
    if(currentInstrument == 2){
        currentInstrument = 0;
    }else{
       currentInstrument++; 
    }
}