const imageObjects = document.querySelectorAll("div.image-collection > img");
const imageScreen = document.querySelector(".image-screen");

imageObjects.forEach((img) => {
    img.onclick = function () {
        imageScreen.innerHTML = img.outerHTML;
    }
});

