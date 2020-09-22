function title(str) {
  let strArray = str.split(" ");
  for (let i in strArray) {
    let letter = strArray[i].charAt(0);
    letter = letter.toUpperCase();
    strArray[i] = strArray[i].slice(1, strArray[i].length).toLowerCase();
    strArray[i] = letter + strArray[i];
  }

  let titleString = "";
  for (let i in strArray) {
    titleString = titleString + " " + strArray[i];
  }
  return titleString.trim();
}

function myReplace(str, before, after) {
  if (str.indexOf(title(before)) > 0) {
    return str.replace(title(before), title(after));
  } else if (str.indexOf(before.toLowerCase()) > 0) {
    return str.replace(before.toLowerCase(), after.toLowerCase());
  }
}

myReplace("Let us go to the store", "store", "mall");

// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
