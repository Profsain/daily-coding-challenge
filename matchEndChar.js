function confirmEnding(str, target) {
  // get the target length
  // extract end str char base on target length
  // using slice method
  // compare char to target
  // if same return true else return false
  const targetLen = target.length;
  const extractedChar = str.slice(-targetLen);
  console.log((extractedChar === target) ? true : false)
  return (extractedChar === target) ? true : false;
  
}

confirmEnding("Bastian", "n");