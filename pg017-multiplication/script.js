numberOne = [1, 5]
numberTwo = [2, 4]

const product = () => {

  let firstProduct = [];
  let newArray = [];
  let firstNum = "";
  let manageProducts = [];
  
  let i = numberTwo.length - 1;
  while(i >= 0){
    newArray=[]
    firstProduct=[]
    firstNum = ""
    for (let j = numberOne.length - 1; j >= 0; j--) {
      let individulaProduct = (numberTwo[i] * numberOne[j]).toString();
      newArray.push(individulaProduct);
    }

    j = i
    console.log(newArray)
    resultedfirstProduct(newArray, i, firstProduct)
    i--
  }

};

console.log(product());

function resultedfirstProduct(newArray, i, firstProduct){

  for (let k = 0; k < newArray.length; k++) {
    if (newArray[k].length === 2) {
      if (i > -1) {
        let balance = numberOne[i - 1] * numberTwo[j] + Number(newArray[k][0]);
        tempStorage = newArray[k + 1];
        newArray[k + 1] = balance.toString();
        i = i - 1;
        console.log(newArray);
      }
    }
    if (newArray[k].length === 2) {
      firstProduct.push(newArray[k][1]);
    } else {
      firstProduct.push(newArray[k]);
    }
  }
  i = numberTwo.length - 1
  j = numberTwo.length - 1
}



// console.log(2685 * 1523)

//Expected output = 4, 089, 255

