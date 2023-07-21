
//FIRST ATTEMPT - Failed

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

//============================================================================

//SECOND ATTEMPT - Failed
// function binary_search(array, number) {
 
//   let sub_array = []
//   let mid_point = Math.floor(array.length / 2);
//   let i = mid_point
//   if (number === array[mid_point]) {
//     return true;
//   }
//   if (number > array[mid_point]) {
//     while (i < array.length) {
//       i++;
//       if(array.length - mid_point > 1){
//         sub_array.push(array[i - 1])
//       }
//     }
//     array = sub_array
//     mid_point = Math.floor(array.length / 2)
//     if (number === array[mid_point]) {
//       return true;
//     }
    
//   }else {
//     while(i < array.length){
//       i--
//       if(array[i] === number){
        
//       }
//     }
//   }
//   return false
// }

// let array_of_numbers = [2, 1, 5, 7, 6];
// let number_to_be_found = 7;

// console.log(
//   "total_array: ",
//   sort_array_of_numbers(array_of_numbers, number_to_be_found)
// );

//=======================================================================

//Third Attempt - Success

function sort_array(array) {
  let temp_storage = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp_storage = array[i];
        array[i] = array[j];
        array[j] = temp_storage;
      }
    }
  }
  return array;
}

function binary_search(array_of_numbers, number_to_be_found){
  
  let sub_array = []
  let length_of_main_array = array_of_numbers.length
 
  for(let j = 0; j < length_of_main_array; j++){
    let sorted_array = sort_array(array_of_numbers)
    let mid_point = Math.floor(sorted_array.length / 2)
    let i = mid_point;

    if(sorted_array[mid_point] === number_to_be_found){
      return true
    }

    if(mid_point === 1){
      if(sorted_array[0]===number_to_be_found || sorted_array[2] === number_to_be_found){
        return true
      }
    }

    if(number_to_be_found > sorted_array[mid_point]){
      sub_array = []
      while(i < sorted_array.length){
        sub_array.push(sorted_array[i])
        i++
      }
    }
    else {
      sub_array = []
      while(i >= 0){
          sub_array.push(sorted_array[i])
        i--
      }
    }
    array_of_numbers = sub_array
  }
  return false
}

//TestCase for Binary Search
const test_cases = [
 {
  array_of_numbers: [10, 20, 30, 40, 50],
  number_to_be_found: 40,
  expected_result: true
 },
 {
  array_of_numbers: [1, 5, 7, 2, 11, 59, 21],
  number_to_be_found: 13,
  expected_result: false
 },
 {
  array_of_numbers: [500, 2, 609, -1, 2],
  number_to_be_found: -1,
  expected_result: true
 },
 {
  array_of_numbers: [0.1, 0.2, 0.5, 8.1],
  number_to_be_found: 0.5,
  expected_result: true
 },
 {
  array_of_numbers: [2010, 1, 5, 7, 6, 8, 4, 9, 7, 6, 8, 2, 3, 14, 8, 16, 22, 15, 46, 80, 100, 102, 115, 121, 115, 1000, 2500, 2000, 3400, 2700],
  number_to_be_found: 14,
  expected_result: true
 }

]

function test_binary_search(){
  test_cases.forEach((tcase, idx) => {
    if(tcase.expected_result === binary_search(tcase.array_of_numbers, tcase.number_to_be_found)){
      console.log (`Testcase for ${idx} passed`)
    }
    else {
      console.log (`Testcase for ${idx} failed`)
    }
  })
}
test_binary_search()