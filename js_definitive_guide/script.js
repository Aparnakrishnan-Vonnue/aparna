let numbersList = [5, 2, 8, 100, 1, 11, 25]

function sortAnArray(array) {
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
  

// console.log(sortAnArray(numbersList))

console.log(Math.pow(2, 53)) // 2 to the power 53
console.log(Math.round(.6)) //round to nearest integer
console.log(Math.ceil(.6)) //round up to an integer
console.log(Math.floor(.6)) //round down to an integer
console.log(Math.abs(-5)) // absolute value
console.log(Math.max(1, 2, 3))
console.log(Math.min(1, 2, 3))
console.log(Math.random()) //Pseudo randon number x where 0 <= x <= 1
console.log(Math.PI)
console.log(Math.E)//base of natural algorithm
console.log(Math.sqrt(3))
console.log(Math.cos(0))
console.log(Math.log(10))

let x = .3 - .2
let y = .2 - .1
console.log(x === y)
console.log(x, y)

console.log((0.1 + 0.2) - 0.3)