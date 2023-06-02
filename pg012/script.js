// let listOfNum = [1, 2, 3, 4, 5]
// let listOfNum = [-8, -6, 4, 1, 10];
let listOfNum = [9, 8, 2, -4, -5]

function maximumProduct() {
  let tempStorage = "";
  for (let i = 0; i < listOfNum.length; i++) {
    for (let j = i + 1; j < listOfNum.length; j++) {
      if (listOfNum[i] < listOfNum[j]) {
        tempStorage = listOfNum[i];
        listOfNum[i] = listOfNum[j];
        listOfNum[j] = tempStorage;
      }
    }
  }
  let product = listOfNum[0];
 
  for (let k = 0; k < listOfNum.length; k++) {
    let productOne = product * (listOfNum[1] * listOfNum[2])
    let productTwo = product * (listOfNum[listOfNum.length - 1] * listOfNum[listOfNum.length - 2]) 
    if(productOne > productTwo){
      return productOne
    }else{
      return productTwo
    }
  }
}

console.log(maximumProduct(listOfNum));
