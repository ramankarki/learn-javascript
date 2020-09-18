function findLongestWordLength(str) {
    let strArray = str.split(" ");
    let lengthArray = [];
    for (let word in strArray)
    {
        lengthArray.push(strArray[word].length);
    }
    console.log(lengthArray.reduce((a, b) => Math.max(a, b)));
    return lengthArray.reduce((a, b) => Math.max(a, b));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
