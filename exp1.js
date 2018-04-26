var context = new AudioContext()
  
window.frequencies = {
    'G3': 195.998,
    'E4': 329.628,
    'C4': 261.626,
};

function playNote(note, time, duration) {
    var osc = context.createOscillator();
    var  g = context.createGain()
    osc.type = "triangle"

    osc.frequency.value = frequencies[note];
    osc.connect(context.destination);
    osc.connect(g)
    osc.start(context.currentTime + time);
    osc.stop(context.currentTime + time + duration);
    return osc;
}


function playFreq(f, time, duration) {
    var osc = context.createOscillator();
    var  g = context.createGain()
    osc.type = "square"

    osc.frequency.value = f;
    osc.connect(context.destination);
    osc.connect(g)
    osc.start(context.currentTime + time);
    osc.stop(context.currentTime + time + duration);
    return osc;
}


function ex0(){
    var o = context.createOscillator()
    o.type = "sine"
    o.connect(context.destination)
    o.start()
}

function ex1(){
    playNote('G3', 0.0, 0.25);
    playNote('E4', 0.25, 0.125);
    playNote('E4', 0.5, 0.125);
    playNote('E4', 0.75, 0.125);
    playNote('C4', 1.25, 0.125);
    playNote('C4', 1.5, 0.125);
    playNote('C4', 1.75, 0.125);
}


function ex2(){
    playFreq(63, 1, 1);
    playFreq(125, 3, 1);
    playFreq(250, 5, 1);
    playFreq(500, 7, 1);
    playFreq(1000, 9, 1);
    playFreq(2000, 11, 1);
    playFreq(4000, 13, 1);
    playFreq(8000, 15, 1);
    playFreq(16000, 17, 1);

}

