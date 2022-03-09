function isEvenlyDivisible(num1, num2){
  if(num1 % num2 === 0){
    return true;
  }else if(num1 % num2 !== 0){
    return false;
  }
}

function halfSquare(num, halfSquare) {
  halfSquare = num * num / 2
  return halfSquare

}

function isLong(str) {
  for(let i = 0; i < str.length; i++){
    if(str.length > 14){
      return true
    }
  }
  return false
}

function exclaim(str) {
  let newStr = str.replaceAll(`!`, ``)
  return newStr += `!`
}

function countWords(str) {
  return str.split(" ").length
}

function containsDigit(str) {
  let num = "1234567890"

  for(let i = 0; i < str.length; i++){
    if(num.includes(str[i])){
      return true 
    }
  }
  return false
}

function containsLowerCase(str) {
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
 for(let i = 0; i < str.length; i++){
   if(lowerCaseLetters.includes(str[i])){
     return true;
   }
  }
  return false;
}

function containsUpperCase(str) {
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWSYZ"
 for(let i = 0; i < str.length; i++){
   if(upperCaseLetters.includes(str[i])){
     return true;
   }
  }
   return false;
}


function containsNonAlphanumeric(str) {
  let AlphaNumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++){
    if(!AlphaNumeric.includes(str[i])){
      return true
    }
  }
  return false
}

function containsSpace(str) {
  let space = " ";
  for(let i = 0; i < str.length; i++){
    if(space.includes(str[i])){
      return true;
    }
  }
  return false
}

function digits(arrayDigits) {
  arrayDigits = String(arrayDigits)
  let newArray = arrayDigits.replaceAll('-','')
  
  newArray = newArray.replaceAll('.','');
  let finalArray = []

  for(let i = 0; i < newArray.length; i++){
    finalArray.push(Number(newArray[i]));
  }
  return finalArray;
}

function truncate(str) {
  if (str.length < 15){
    return str
  }else {
    return str = str.slice(0, 8) + "..."
  }
}

function isValidPassword(str) {
  if(
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsNonAlphanumeric(str) &&
    containsDigit(str) &&
    !containsSpace(str) 
  ) {
    return true;
  }else {
    return false;
  }
}

function onlyPunchy(titles) {
  const result1 = titles.map(exclaim);
  const result2 = result1.filter(x => x.length < 15)
  return result2;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}