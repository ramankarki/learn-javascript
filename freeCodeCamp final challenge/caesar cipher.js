function caesar(str, key = 13) {
    let newStr = "";
    for (let i in str) {
        let uni = str.charCodeAt(i);
        if (uni >= 65 && uni <= 90) {
            uni += key;
        }
        while (uni > 90) {
            uni -= 26;
        }
        newStr += String.fromCharCode(uni);
    }
    return newStr;
}

console.log(caesar("FREE CODE CAMP"));
