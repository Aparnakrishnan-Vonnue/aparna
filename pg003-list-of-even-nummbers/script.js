let listOfIntegersOne = [1, 2, 3, 4, 5, 6]
let listOfIntegersTwo = [7, 8, 9, 10, 11, 12]
let listOfIntegersThree = [2, 4, 6, 8, 10]

function ListOfEvenNum(array){
  let listOfEvenNums = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      listOfEvenNums.push(array[i])
    }
  }
  return listOfEvenNums
}


console.log(returnListOfEvenNum(listOfIntegersOne))
console.log(returnListOfEvenNum(listOfIntegersTwo))



function testListOfEvenNum(){
  
}