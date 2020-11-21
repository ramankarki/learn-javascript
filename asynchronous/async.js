// let updateTime = function() {
//     let time = new Date();
//     document.body.innerHTML = time.toLocaleString();
//     document.body.style.fontFamily = "sans-serif";
// };

// setInterval(updateTime, 1000);

// -------------------------------------

// fetch("https://source.unsplash.com/1366x728/?nature,water").then(response => {
//     if (response.ok) {
//         return response.blob();
//     } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
// }).then(myBlob => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement("img");
//     image.src = objectURL;
//     document.body.append(image);
// }).catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// });

// -------------------------------------

function fetchAndDecode(url, type) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            if (type === 'blob') {
                return response.blob();
            } else if (type === 'text') {
                return response.text();
            }
        }
    }).catch(e => {
        console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
    });
}

function display(blobUrl, type) {
    let element = document.createElement(type);
    if (type === "img") {
        element.src = blobUrl;
    }
    element.textContent = blobUrl;
    document.body.appendChild(element);
}

let image = fetchAndDecode("https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/promises/coffee.jpg", "blob");
let image1 = fetchAndDecode("https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/promises/tea.jpg", "blob");
let text = fetchAndDecode("https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/promises/description.txt", "text");


Promise.all([image, image1, text]).then(values => {
    console.log(values);
    // Store each value returned from the promises in separate variables; create object URLs from the blobs
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);

    // Display the images in <img> elements
    display(objectURL1, "img");
    display(objectURL2, "img");
    display(values[2], "p");
});

