//function that calculates total number of occurence of an element in an array

function numberOfOccurence(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count += 1;
    }
  }
  return count;
}

console.log(numberOfOccurence([1, 5, 8, 1, 6, 3, 8, 8, 2, 5], 8));
