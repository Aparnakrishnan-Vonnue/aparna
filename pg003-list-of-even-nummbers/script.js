
function listOfEvenNum(array){
  let listOfEvenNums = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      listOfEvenNums.push(array[i])
    }
  }
  return listOfEvenNums
}


const testCases = [
  {
    list:[7, 8, 9, 10, 11, 12],
    expected:[8, 10, 12]
  },
  {
    list: [1, 3, 5, 7],
    expected: []
  }, 
  {
    list: [0, 2, 5, -9, 3, 5.6, "hello"],
    expected: [0, -2]
  }
]

function testCases(){
  
}