function destroyer(arr, ...argument) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < argument.length; j++) {
      if (arr[i] == argument[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
