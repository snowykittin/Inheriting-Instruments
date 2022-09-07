// //create a synth and connect it to the main output (your speakers)
// let synthApp = {
//     synth: new Tone.Synth().toDestination(),
//     notes: [ "C4", "D4", "E4", "F4"],
//     currentNote: 0,
//     playSound(){
//         this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
//         this.currentNote++;

//         setTimeout(this.playSound.bind(this), 500);
//     }
// }

let currentInstrument = 0;

class Instruments{
    constructor(loudness, family, play){
        this.loudness = loudness;
        this.family = family;
        this.play = play;
    }
    
    synth = new Tone.Synth().toDestination();
    playSound(duration, over){
        this.synth.triggerAttack("A4", 0);
        console.log(this.family + " " + this.play + " at " + this.loudness);
        over(duration);        
    }
    over(duration){
        this.synth.triggerRelease(0 + duration);
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


var instrumentArray = [flute, violin, drum]


for(currentInstrument; currentInstrument<instrumentTest.length; playNext){
    playNext(currentInstrument);
    if(currentInstrument == 2){
        currentInstrument = 0;
    }else{
        currentInstrument++;
    }
}

function playNext(currentInstrument){
    instrumentArray[currentInstrument].playSound(0.5);
}