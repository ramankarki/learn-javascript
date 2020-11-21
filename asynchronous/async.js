// let updateTime = function() {
//     let time = new Date();
//     document.body.innerHTML = time.toLocaleString();
//     document.body.style.fontFamily = "sans-serif";
// };

// setInterval(updateTime, 1000);

fetch("https://source.unsplash.com/1366x728/?nature,water").then(response => {
    if (response.ok) {
        return response.blob();
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}).then (myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.append(image);
}).catch(response => {
    console.log("Error: " + response.message);
});


