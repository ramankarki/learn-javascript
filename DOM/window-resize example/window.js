const div = document.querySelector('div');

let fullScreen = function () {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    div.style.width = winWidth + 'px';
    div.style.height = winHeight + 'px';
}

fullScreen();
window.onresize = fullScreen;

