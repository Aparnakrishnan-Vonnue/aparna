let stringInput = "assistant";

const frequencyOfLetters = (str) => {
  let freqObj = {};
  let i = 0;
  while (i < str.length) {
    let frequency = 1;
    freqObj[str[i]] = frequency
    for (let j = 0; j < i; j++) {
      if (str[i] === str[j]) {
        frequency += 1
        freqObj[str[i]] = frequency 
      }
    }
    i++;
  }
  return freqObj;
};

console.log(frequencyOfLetters(stringInput));
