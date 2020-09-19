function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let counter = 0;
    for (let i = arr.length; i >= size; i -= size)
    {
      newArr.push(arr.slice(counter, counter+size));
      counter += size;
    }
    if (arr.length !== counter)
    {
      newArr.push(arr.slice(counter,));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// ----------- test ------------
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Passed
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
