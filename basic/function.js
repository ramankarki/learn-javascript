function reuse(first, second){
    "add numbers";
    console.log(first, second);
}

reuse("hello", "world");

// ---------------------------------------------------------------------------------

function hello(){
    a = 10;
    b = 10;
    console.log(a+b);
}


hello();
console.log(a);
d = 50;
console.log(d);

// -----------------------------------------------------------------------------------

function nextInLine(arr, item) {
    arr.push(item) // add item at last
    item = arr.shift(); // remove item from first
    return item;
}


// Setup
var testArr = [1,2,3,4,5];
console.log(testArr)
nextInLine(testArr, 10);
console.log(testArr)

