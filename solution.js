// solution Q1
// create a function that takes a string
// create an empty object
// loop through the string
// if the character is not in the object, add it to the object
// if the character is in the object, increment the value by 1
// return the object
function countChar(str) {
    const charObj = {};

    for (let i = 0; i < str.length; i++) {
        if (!charObj[str[i]]) {
            charObj[str[i]] = 1;
        } else {
            charObj[str[i]]++;
        }
    }

    return charObj;
}
countChar('hello')
countChar('acountability')

// Solution Q3
// create empty array
// sort the array
// loop through the array
// compare element, 
// if same element, push element to array

function findDuplicate(numbers) {
    const duplicateNums = [];
    let sortedNums = numbers.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            duplicateNums.push(sortedNums[i])
        }
    }
    
    return duplicateNums;
}
findDuplicate([1, 2, 3, 4, 2, 5, 6, 3]);
