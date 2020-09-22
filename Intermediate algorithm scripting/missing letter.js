function fearNotLetter(str) {
  let startIndex = str.charCodeAt(0);
  let endIndex = str.charCodeAt(str.length - 1);
  for (let i = startIndex; i <= endIndex; i++) {
    let uniToChar = String.fromCharCode(i);
    let index = str.indexOf(uniToChar);
    if (index == -1) {
      return uniToChar;
    }
  }
}

fearNotLetter("abce");

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
