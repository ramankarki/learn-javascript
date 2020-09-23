function steamrollArray(arr) {
  let newArr = [];
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      newArr.push(...steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
