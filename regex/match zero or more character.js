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

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username)
// console.log(result);

// -------------------------------------------------

// let quit = "qu";
// let noquit = "aqt";
// let quRegex= /q(?=u)/; // returns q when there is u after q
// let qRegex = /qt(?! )/; // returns qt when there is not blankspace after qt
// let result = quit.match(quRegex); // Returns ["q"]
// let result1 = noquit.match(qRegex); // Returns ["q"]
// console.log( result1);

// -------------------------------------------------

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result = password.match(checkPass); // Returns true
console.log(result);
