const btn = document.querySelectorAll('button');
let p = document.querySelector("p");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

console.log(btn[0]);
btn.forEach(button => addEventListener('click', bgChange));

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function (e) {
    // e.target is the clicked element!
    // If it was a list item
    if (e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
});
