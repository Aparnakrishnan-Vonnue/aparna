let wordToCheck = "pole";
let sampleWord = "loople";

function toCheckWhetherAnagram(word, sample) {
  if (word.length !== sample.length) {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    let check = false;

    for (let j = 0; j < sample.length; j++) {
      if (word[i] === sample[j]) {
        check = true;
        break;
      }
    }

    if (check === false) {
      return false;
    }
  }

  return true;
}

console.log(toCheckWhetherAnagram(wordToCheck, sampleWord));
