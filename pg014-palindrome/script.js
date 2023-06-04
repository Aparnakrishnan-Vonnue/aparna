let string = "A man, a plan! a canal, Panama";
// let string = "Racecar"
// let string = "Hello, world!"

function ifPalindrome() {
  let modifiedStr = "";
  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
      (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
    ) {
      if (string.charCodeAt(i) !== " ") {
        modifiedStr += string[i].toLowerCase();
      }
    }
  }

  let isPalindrome = false;
  for (
    let j = 0, k = modifiedStr.length - 1;
    j < modifiedStr.length, k > 0;
    j++, k--
  ) {
    console.log(modifiedStr[j], modifiedStr[k]);
    if (modifiedStr[j] === modifiedStr[k]) {
      isPalindrome = true;
    } else {
      return false;
    }
  }
  return isPalindrome;
}

console.log(ifPalindrome(string));
