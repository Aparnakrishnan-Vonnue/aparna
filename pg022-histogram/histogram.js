function histogram(givenStr) {
  let inputStr = givenStr.toLowerCase();
  let modifiedArray = convertWord(inputStr);
  sortArray(modifiedArray);
  let histogramObj = {};
  let count = 1;
  let maxLength = 1;
  let spaceRequired = 0;
  let resultantHistogram = {};

  for (let i = 0; i < modifiedArray.length; i++) {
    if (histogramObj[modifiedArray[i]]) {
      continue;
    }
    for (let j = i + 1; j < modifiedArray.length + 1; j++) {
      if (modifiedArray[i] === modifiedArray[j]) {
        if (histogramObj[modifiedArray[i]]) {
          histogramObj[modifiedArray[i]] += 1;
        } else {
          histogramObj[modifiedArray[i]] = count + 1;
        }
      } else {
        if (count < 2) {
          if (!histogramObj[modifiedArray[i]]) {
            histogramObj[modifiedArray[i]] = 1;
          } else {
            continue;
          }
        }
      }
    }
  }
  Object.keys(histogramObj).forEach((key) => {
    key.length > maxLength ? (maxLength = key.length) : maxLength;
  });

  Object.entries(histogramObj).forEach(([key, value]) => {
    let starPattern = "*".repeat(value);
    if (key.length !== maxLength) {
      spaceRequired = maxLength - key.length;
      key += " ".repeat(spaceRequired + 1);
    } else {
      key += " ";
    }
    resultantHistogram[key] = starPattern;
  });

  return resultantHistogram;
}

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
      case ",":
        modifiedString += "co" + " ";
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

const testCases = [
  {
    word: "hello World.",
    output: {
      "d  ": "*",
      "e  ": "*",
      "h  ": "*",
      "l  ": "***",
      "o  ": "**",
      "r  ": "*",
      "w  ": "*",
      "sp ": "*",
      "dt ": "*",
    },
  },
  {
    word: "@gmail.com",
    output: {
      "a  ": "*",
      "c  ": "*",
      "g  ": "*",
      "i  ": "*",
      "l  ": "*",
      "m  ": "**",
      "o  ": "*",
      "dt ": "*",
      "ot ": "*",
    },
  },
  {
    word: "Vonnue@1234#",
    output: {
      "1  ": "*",
      "2  ": "*",
      "3  ": "*",
      "4  ": "*",
      "e  ": "*",
      "n  ": "**",
      "o  ": "*",
      "ot ": "**",
      "u  ": "*",
      "v  ": "*",
    },
  },
  {
    word: "Malayalam    ",
    output: {
      "a  ": "****",
      "l  ": "**",
      "m  ": "**",
      "sp ": "****",
      "y  ": "*",
    },
  },
  {
    word: "@#!$%",
    output: { "ot ": "*****" },
  },
  {
    word: "MoNoToNoUs",
    output: {
      "m ": "*",
      "n ": "**",
      "o ": "****",
      "s ": "*",
      "t ": "*",
      "u ": "*",
    },
  },
  {
    word: "EeEeEeEe  E e   e",
    output: { "e  ": "***********", "sp ": "******" },
  },
  {
    word: "India is my country, all Indians are my brothers and sisters",
    output: {
      "a  ": "*****",
      "b  ": "*",
      "c  ": "*",
      "d  ": "***",
      "e  ": "***",
      "h  ": "*",
      "i  ": "******",
      "l  ": "**",
      "m  ": "**",
      "n  ": "*****",
      "o  ": "**",
      "r  ": "*****",
      "s  ": "******",
      "sp ": "**********",
      "t  ": "***",
      "u  ": "*",
      "y  ": "***",
      "co ": "*",
    },
  },
];

const testHistogram = (tCases) => {
  tCases.forEach((tCase, idx) => {
    if (
      JSON.stringify(tCase.output) === JSON.stringify(histogram(tCase.word))
    ) {
      console.log(
        `Testcase for ${idx} passed. Output is ${JSON.stringify(
          histogram(tCase.word)
        )}`
      );
    } else {
      console.log(
        `Testcase for ${idx} failed. The expected result was ${
          tCase.output
        }, but got ${histogram(tCase.word)}`
      );
    }
  });
};

console.log(testHistogram(testCases));
