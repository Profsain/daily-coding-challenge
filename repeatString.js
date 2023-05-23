function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num <= 0) {
    console.log(newStr)
    return newStr;
  } else {
    let i = 1;
    while (i <= num) {
      newStr += str;
      i++;
    } 
    console.log(newStr)
  }
  return str;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);