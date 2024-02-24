//return longest string from an array of strings

function longestString(arr) {
  let maxLength = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  while (j < arr.length) {
    if (arr[j].length === maxLength) {
      return arr[j];
    }
    j++;
  }
}

console.log(longestString(["cat", "crow", "elephant", "goodmorning"]));
