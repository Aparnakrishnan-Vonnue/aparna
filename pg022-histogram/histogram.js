// for eg: if the input text is
// "hello world." then the output should be
// d  - 1
// e  - 1
// h  - 1
// l  - 3
// o  - 2
// r  - 1
// w  - 1
// sp - 1
// .  - 1

function convertWord(inputStr) {
  let modifiedString = "";
  let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  for (let i = 0; i < inputStr.length; i++) {
    let defaultChar = inputStr[i];
    switch (defaultChar) {
      case " ":
        modifiedString += "sp" + " ";
        break;
      case ".":
        modifiedString += "dt" + " ";
        break;
      default:
        if (specialCharacters.includes(defaultChar)) {
          modifiedString += "ot" + " ";
        } else {
          modifiedString += defaultChar + " ";
        }
    }
  }
  return modifiedString.trim().split(" ");
}

function histogram(inputStr) {
  let modifiedArray = convertWord(inputStr);
  sortArray(modifiedArray);
  let histogramObj = {};
  let count = 1;
  for (let i = 0; i < modifiedArray.length; i++) {
    for (let j = i + 1; j < modifiedArray.length - 1; j++) {
      if (modifiedArray[i] === modifiedArray[j]) {
        if (histogramObj[modifiedArray[i]]) {
          break;
        }
      } else {
        if (count < 2) {
          histogramObj[modifiedArray[i]] = 1;
        }
      }
    }
  }
  return histogramObj;
}

console.log(histogram("helllo ."));

function sortArray(arr) {
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].charCodeAt() > arr[j].charCodeAt()) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      const element = arr.splice(i, 1)[0];
      arr.push(element);
    }
  }
  return arr;
}
