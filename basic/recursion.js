function countdown(n){
    if (n < 1) {
        return [];
    }   else {
        const countArray = countdown(n-1);
        countArray.unshift(n);
        return countArray;
    }
}

// console.log(countdown(10));

// --------------------------------------------------------------------------------------------------------------------

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
}

// console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// --------------------------------------------------------------------------------------------------------------------

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
}

console.log(rangeOfNumbers(3, 5)); // [ 1, 2, 3, 4, 5 ]

