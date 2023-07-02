let array_of_numbers = [2, 1, 5, 7, 6];
let number_to_be_found = 7;

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

  console.log("sub_array: ", binary_search(array_of_numbers));
  return array_of_numbers;
}

console.log("total_array: ", sort_array_of_numbers(array_of_numbers));

function binary_search() {
  let sub_array = [];

  mid_point = Math.floor(array_of_numbers.length / 2);

  if (array_of_numbers[mid_point] < number_to_be_found) {
    for (let n = mid_point; n < array_of_numbers.length; n++) {
      sub_array.push(array_of_numbers[n]);
    }
  } else if (array_of_numbers[mid_point] > number_to_be_found) {
    for (let n = 0; n <= mid_point; n++) {
      sub_array.push(array_of_numbers[n]);
    }
  } else if (array_of_numbers[mid_point] === number_to_be_found) {
    sub_array.push(array_of_numbers[mid_point]);
  }

  mid_point = Math.floor(sub_array.length / 2)

  if(sub_array.length > 1){
    for(let m = 0; m < sub_array.length; m++){
      if(sub_array[mid_point] < number_to_be_found) {
        for(let n = mid_point; n < sub_array.length; n++){
  
        }
      }    
    }
  }
  return sub_array
}
