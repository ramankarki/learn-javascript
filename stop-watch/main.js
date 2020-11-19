DOM = {
    "hr": ".hr-js",
    "min": ".min-js",
    "sec": ".sec-js",
    "miliSec": ".mili-sec-js",
    "start": ".start-js",
    "stop": ".stop-js",
    "reset": ".reset-js",
};

let time = {
    hr: 0,
    min: 0,
    sec: 0,
    miliSec: 0
}

let updateUI = (hr, min, sec, miliSec) => {
    document.querySelector(DOM["hr"]).innerHTML = hr;
    document.querySelector(DOM["min"]).innerHTML = min;
    document.querySelector(DOM["sec"]).innerHTML = sec;
    document.querySelector(DOM["miliSec"]).innerHTML = miliSec;
}

let checkSingleDigit = () => {
    let hr = time.hr < 10 ? "0" + time.hr : time.hr;
    let min = time.min < 10 ? "0" + time.min : time.min;
    let sec = time.sec < 10 ? "0" + time.sec : time.sec;
    let miliSec = time.miliSec < 10 ? "0" + time.miliSec : time.miliSec;
    return [hr, min, sec, miliSec];
}

let updateTime = () => {
    time.miliSec++;

    if (time.miliSec === 10) {
        time.miliSec = 0;
        time.sec++;
    }

    if (time.sec === 60) {
        time.sec = 0;
        time.min++;
    }
    
    if (time.min === 60) {
        time.min = 0;
        time.hr++;
    }
    
    if (time.hr === 60) {
        clearInterval(interval);
    }

    let [hr, min, sec, miliSec] = checkSingleDigit();
    updateUI(hr, min, sec, miliSec);
}


let interval;
let lastClicked = "";

let startTimer = (e) => {
    if (lastClicked !== DOM.start) {
        interval = setInterval(updateTime, 100);
        lastClicked = "." + e.target.className.split(" ")[1];
    }
}

let stopTimer = (e) => {
    if (lastClicked !== DOM.stop) {
        clearInterval(interval);
        lastClicked = "." + e.target.className.split(" ")[1];
    }
}

let reset = (e) => {
    for (let prop in time) {
        time[prop] = 0;
    }
    let [hr, min, sec, miliSec] = checkSingleDigit();
    updateUI(hr, min, sec, miliSec);
}

document.querySelector(DOM.start).addEventListener("click", startTimer);
document.querySelector(DOM.stop).addEventListener("click", stopTimer);
document.querySelector(DOM.reset).addEventListener("click", reset);
