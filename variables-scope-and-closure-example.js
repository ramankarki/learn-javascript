function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 10) {
    let y = i;
    shooters.push(
      function gen() {
      return y;
      }
    );
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
console.log(army[0]()); 
console.log(army[1]()); 
console.log(army[2]()); 
console.log(army[9]()); 
console.log(army[6]()); 