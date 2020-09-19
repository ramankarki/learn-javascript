function titleCase(str) {
    let strArray = str.split(" ");
    for (let i in strArray)
    {
      let letter = strArray[i].charAt(0);
      letter = letter.toUpperCase();
      strArray[i] = strArray[i].slice(1, strArray[i].length).toLowerCase();
      strArray[i] = letter + strArray[i];
    }
  
    let titleString = "";
    for (let i in strArray)
    {
      titleString = titleString + " " + strArray[i];
    }
    console.log(titleString);
    return titleString.trim();
}

titleCase("sHoRt AnD sToUt");
