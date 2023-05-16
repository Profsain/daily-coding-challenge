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