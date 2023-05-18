function largestOfFour(arr) {
  // create empty array to hold max num
  // loop through the array
  // find max number in sub array using Math.max method
  // push max number to maxArray
  // return maxArray
  const maxNumArr = [];
  for (const subArr of arr) {
    const maxNum = Math.max(...subArr);
    maxNumArr.push(maxNum);
  }
  console.log(maxNumArr)
  return maxNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);