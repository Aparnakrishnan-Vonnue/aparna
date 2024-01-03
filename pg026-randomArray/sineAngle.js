function findFactorial(num) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  function findPower(num, pow) {
    let acc = 1;
    for (let i = 0; i < pow; i++) {
      acc *= num;
    }
    return acc;
  }
  
  function getSine(angle, limit) {
    let angleToRadian = angle * (Math.PI / 180);
    let sineApprox = 0;
    for (let i = 1; i <= limit; i += 2) {
      if (i % 4 === 1) {
        sineApprox += findPower(angleToRadian, i) / findFactorial(i);
      } else if (i % 4 === 3) {
        sineApprox -= findPower(angleToRadian, i) / findFactorial(i);
      }
    }
    return sineApprox;
  }
  
//   console.log(getSine(90, 5)); 
  