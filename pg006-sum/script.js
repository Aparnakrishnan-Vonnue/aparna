let listOfInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ]

function sumOfIntegers(list){
  let total = 0
  for(let i = 0; i < listOfInt.length; i++){
   if(list[i] % 3 === 0){
      total = total + list[i]
   }
  }
  return total
}

console.log(sumOfIntegers(listOfInt))