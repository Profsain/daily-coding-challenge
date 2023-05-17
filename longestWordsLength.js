function findLongestWordLength(str) {
  // conver str to array using split() method
  // loop through strArray and check item length
  // return the longest word length
  const strArr = str.split(" ");
  let longest = strArr[0].length;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length > longest) {
      longest = strArr[i].length
    }
  }
  console.log(longest)
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("The quickest browning fox jumped over the lazy dog");