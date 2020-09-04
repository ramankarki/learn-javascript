// let word = "oggogogooooogogogoggggoo";
// let regex = /go*/g;
// let result = word.match(regex);
// console.log(result);
// console.log(word.length);

// -------------------------------------------------

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[/]..>/; // Change this line
let result = text.match(myRegex);

console.log(result);
