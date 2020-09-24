function palindrome(str) {
  let newStr = str.replace(/\W+|_+/g, "").toLowerCase();
  let reverseStr = newStr.split("").reverse().join("").toLowerCase();
  if (newStr === reverseStr) {
    return true;
  }
  return false;
}

console.log(palindrome("My age is 0, 0 si ega ym."));
