let time = 0;
// start timer function on button press
// end timer function on button press
// time += function return;

// fucntion to change seconds to HH:MM:SS

// display this time to a HTML element
// document.querySelector("timer").innerHTML = time;

let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(mainTime,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

function mainTime() {
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
            }
        }
    }

    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    let foobar = `${m}:${s}:${ms}`;

    timerRef.innerHTML = foobar;
    
    localStorage.setItem(`${localStorage.length}`, foobar);
}