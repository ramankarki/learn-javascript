const squareList = (arr) => {
    // Only change code below this line
    let integer = arr.filter(num => num > 0).filter(num => num % 1 == 0);
    let square = integer.map(num => num ** 2);
    return square;
    // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
