function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  newStr = newStr.toLowerCase();
  return newStr.replace(/\s+|_+/g, "-");
}

console.log(spinalCase("thisIsSpinalTap"));
