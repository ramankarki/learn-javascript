const imageObjects = document.querySelectorAll("div.image-collection > img");
const imageScreen = document.querySelector(".image-screen");
const bigImage = document.querySelector(".image-screen > img");

function shadow(img) {
    for (let i = 0; i < imageObjects.length; i++) {
        if (imageObjects[i] === img) {
            imageObjects[i].style.boxShadow = "0 3px 15px -3px black";
        }
        else {
            imageObjects[i].style.boxShadow = "none";
        }
    }
}

imageObjects.forEach((img) => {
    img.onclick = function (e) {
        e.stopPropagation();
        imageScreen.innerHTML = img.outerHTML;
        shadow(img);
    }
    bigImage.style.boxShadow = "none";
});
