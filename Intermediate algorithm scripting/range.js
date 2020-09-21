function range(value1, value2) {
    let start;
    let end;
    let numList = [];
    if (value1 < value2) {
      start = value1;
      end = value2;
    }
    else {
      start = value2;
      end = value1;
    }
    for (let i = start; i < end; i++) {
      numList.push(i);
    }

    return numList;
}
  
console.log(range(5,10));
