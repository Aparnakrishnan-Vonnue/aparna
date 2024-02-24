//approximation of sine of an angle using Taylor's series

//Taylors series sin x approx = angle - angle³/3! + angle5/5! - angle7/7!+ ...
//Taylors series cons x approx = 1 - angle²/2! + angle4/4! - ...

function factorialOfNum(num) {
  let acc = 1;
  for (let i = 1; i <= num; i++) {
    acc *= i;
  }
  return acc;
}

function findPowerOfNum(num, power) {
  let acc = num;
  if (power === 0) {
    return 1;
  }
  for (let i = 1; i < power; i++) {
    acc *= num;
  }
  return acc;
}

function degreeToRadianConverter(angle) {
  let radianOfAngle = angle * (Math.PI / 180);
  return radianOfAngle;
}

function getSine(angle, limit) {
  let radianOfAngle = degreeToRadianConverter(angle);
  let taylorsSequence = 0;
  let changeSign = false;
  for (let i = 1; i < limit; i++) {
    if (i % 2 !== 0) {
      let powerOfAngle = findPowerOfNum(radianOfAngle, i);
      let factorial = factorialOfNum(i);
      if (changeSign) {
        taylorsSequence -= powerOfAngle / factorial;
        changeSign = false;
      } else {
        taylorsSequence += powerOfAngle / factorial;
        changeSign = true;
      }
    }
  }
  return taylorsSequence;
}

// console.log(getSine(270, 100));

function getCosine(angle, limit) {
  let radianOfAngle = degreeToRadianConverter(angle);
  let taylorsSequence = 0;
  let changeSign = false;

  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      let powerOfAngle = findPowerOfNum(radianOfAngle, i);
      let factorial = factorialOfNum(i);
      if (changeSign) {
        taylorsSequence -= powerOfAngle / factorial;
        changeSign = false;
      } else {
        taylorsSequence += powerOfAngle / factorial;
        changeSign = true;
      }
    }
  }
  return taylorsSequence;
}

console.log(getCosine(90, 10));
