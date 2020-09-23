function sumFibs(num) {
  let fibArray = [];
  let b = 1;
  let a = 0;
  let sum = 0;
  while (a <= num) {
    fibArray.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
  return fibArray.filter((num) => num % 2 != 0).reduce((sum, a) => sum + a, 0);
}

console.log(sumFibs(5));
