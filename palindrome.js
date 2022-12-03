function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrome('adda'))//true
console.log(checkPalindrome('aasdasf'))//false


