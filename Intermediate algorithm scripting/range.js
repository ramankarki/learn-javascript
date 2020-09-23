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

console.log(range(20, 10, -5));
