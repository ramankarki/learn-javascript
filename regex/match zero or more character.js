// let word = "oggogogooooogogogoggggoo";
// let regex = /go*/g;
// let result = word.match(regex);
// console.log(result);
// console.log(word.length);

// -------------------------------------------------

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<[/]..>/; // Change this line
// let result = text.match(myRegex);

// console.log(result);

// -------------------------------------------------

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// console.log(result);

// -------------------------------------------------

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);

// console.log(result);

// -------------------------------------------------

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;
// console.log(result);

// -------------------------------------------------

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username)
console.log(result);
