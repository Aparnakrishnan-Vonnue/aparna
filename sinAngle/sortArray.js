//sort an array of numbers in descending order

function descendingSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(descendingSort([5, 2, 6, 4, 8, 10, 526, 102, 100]));
