function range(start, end = false, step = 1) {
  let numArray = [];
  if (typeof start === typeof 1 && end === false) {
    for (let i = 0; i < start; i++) {
      numArray.push(i);
    }
  } else if (typeof start === typeof 1 && typeof end === typeof 1) {
    if (start < end && step > 0) {
      for (let i = start; i < end; i += step) {
        numArray.push(i);
      }
    } else if (start > end && step < 0) {
      for (let i = start; i > end; i += step) {
        numArray.push(i);
      }
    }
  }
  return numArray;
}

function smallestCommons(arr) {
  function found(num, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (num % arr[i] !== 0) {
        return false;
      }
    }
    return true;
  }

  let numArray = range(Math.min(...arr), Math.max(...arr) + 1);
  let num = 2;
  while (!found(num, numArray)) {
    while (!found(num, numArray)) {
      num++;
      if (num % 10000 === 0) {
        break;
      }
    }
  }
  return num;
}

console.log(smallestCommons([23, 18]));

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

