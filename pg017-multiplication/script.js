const numberOne = [2, 6, 8, 5];
const numberTwo = [1, 5, 2, 3];

const product = () => {
  for (let i = numberTwo.length; (i > 0); i--) {
    for (let j = numberOne.length; (j > 0); j--) {
      let singleProduct =( numberTwo[i - 1] * numberOne[j - 1]).toLocaleString()
      if(singleProduct.length === 2){
        const balance = singleProduct[0]
        const intProd = Number(singleProduct)
        const numBalance = Number(balance)
        console.log(intProd, Number(balance))
        pro = intProd + numBalance
        console.log(pro)


      } 
    }
  }
};

product();

// console.log(2685 * 1523)

//Expected output = 4, 089, 255