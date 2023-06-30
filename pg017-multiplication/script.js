const numberOne = [2, 6, 8, 5];
const numberTwo = [1, 5, 2, 3];

const product = () => {
  let firstProduct = [];
  let newArray = [];
  let firstNum = "";
  let tempStorage = "";
  let manageProducts = [];
  debugger
  let i = numberTwo.length - 1;
  while(i >= 0){
    newArray=[]
    firstProduct=[]
    firstNum = ""
    for (let j = numberOne.length - 1; j >= 0; j--) {
      let individulaProduct = (numberTwo[i] * numberOne[j]).toLocaleString();
      newArray.push(individulaProduct);
    }
    j = i;

    resultedfirstProduct(newArray, i, firstProduct)

    for (let n = firstProduct.length - 1; n >= 0; n--) {
      firstNum += firstProduct[n];
      console.log(firstNum);
    }
    manageProducts.push(Number(firstNum));
    console.log(manageProducts);
    i--
  }

};

console.log(product());

function resultedfirstProduct(newArray, i, firstProduct){
  debugger
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
  i = numberTwo.length
  j = numberTwo.length - 1
}



// console.log(2685 * 1523)

//Expected output = 4, 089, 255
