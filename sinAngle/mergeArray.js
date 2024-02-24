const mixArray = (arr1, arr2, offset) => {
  let newArray = [];
  let i = 0;
  let j = 0;
  let temp = [];

  if (offset < 0) {
    temp = arr1;
    arr1 = arr2;
    arr2 = temp;
    while (i < arr1.length && j < arr2.length) {
      newArray = newArray.concat(
        arr1.slice(i, i - offset),
        arr2.slice(j, j - offset)
      );
      i = i - offset;
      j = j - offset;
    }
    newArray = newArray.concat(arr1.slice(i), arr2.slice(j));
  } else if (offset > 0) {
    while (i < arr1.length && j < arr2.length) {
      newArray = newArray.concat(
        arr1.slice(i, i + offset),
        arr2.slice(j, j + offset)
      );
      i = i + offset;
      j = j + offset;
    }
    newArray = newArray.concat(arr1.slice(i), arr2.slice(j));
  } else {
    newArray = [];
  }
  return newArray;
};

console.log(mixArray([1, 2, 3, 4, 5], [2, 4, 6, 7, 10], 1))