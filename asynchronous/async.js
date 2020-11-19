let updateTime = function() {
    let time = new Date();
    document.body.innerHTML = time.toLocaleString();
    document.body.style.fontFamily = "sans-serif";
};

setInterval(updateTime, 1000);
set