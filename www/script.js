
var playbutton = document.getElementById('startbutton');
var resetbutton = document.getElementById('sessionhistorybutton');
var playtext = document.getElementById('starttext');
var audio = new Audio('Audio.mp3');
var Flag = 0;
playbutton.addEventListener('click', playpause);
resetbutton.addEventListener('click', resetaudio);

function playpause() {
    if (Flag === 0) {
        audio.play();
        playbutton.style.backgroundColor = 'red';
        playtext.textContent = 'Pause';
        Flag = 1;
    }
    else {
        Flag = 0;
        audio.pause();
        playbutton.style.backgroundColor = 'yellowgreen';
        playtext.textContent = 'Play';
    }
}

function resetaudio() {
    audio.pause()
    audio.currentTime = 0;
    Flag = 0;
    playbutton.style.backgroundColor = 'yellowgreen';
    playtext.textContent = 'Play';
}