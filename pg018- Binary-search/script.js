function sort_array_of_numbers(array_of_numbers) {
  let temp_storage = 0;

  for (let i = 0; i < array_of_numbers.length; i++) {
    for (let j = i; j < array_of_numbers.length; j++) {
      if (array_of_numbers[i] > array_of_numbers[j]) {
        temp_storage = array_of_numbers[i];
        array_of_numbers[i] = array_of_numbers[j];
        array_of_numbers[j] = temp_storage;
      }
    }
  }
  console.log(binary_search(array_of_numbers, number_to_be_found));
  return array_of_numbers;
}

function binary_search(array, number) {
 
  let sub_array = []
  let mid_point = Math.floor(array.length / 2);
  let i = mid_point
  if (number === array[mid_point]) {
    return true;
  }
  if (number > array[mid_point]) {
    while (i < array.length) {
      i++;
      if(array.length - mid_point > 1){
        sub_array.push(array[i - 1])
      }
    }
    array = sub_array
    mid_point = Math.floor(array.length / 2)
    if (number === array[mid_point]) {
      return true;
    }
    
  }else {
    while(i < array.length){
      i--
      if(array[i] === number){
        
      }
    }
  }
  return false
}

let array_of_numbers = [2, 1, 5, 7, 6];
let number_to_be_found = 7;

console.log(
  "total_array: ",
  sort_array_of_numbers(array_of_numbers, number_to_be_found)
);











// function binary_search() {
//   let sub_array = [];

//   mid_point = Math.floor(array_of_numbers.length / 2);

//   if (array_of_numbers[mid_point] < number_to_be_found) {
//     for (let n = mid_point; n < array_of_numbers.length; n++) {
//       sub_array.push(array_of_numbers[n]);
//     }
//   } else if (array_of_numbers[mid_point] > number_to_be_found) {
//     for (let n = 0; n <= mid_point; n++) {
//       sub_array.push(array_of_numbers[n]);
//     }
//   } else if (array_of_numbers[mid_point] === number_to_be_found) {
//     sub_array.push(array_of_numbers[mid_point]);
//   }

//   mid_point = Math.floor(sub_array.length / 2)
//   return sub_array
// }
