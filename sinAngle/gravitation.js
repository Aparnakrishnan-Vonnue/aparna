//f=(gm1m2)/r2
//function to calculate the force of gravity
//value of gravitational constant g = 6.67 * 10/\-11 Nm2/kg3

const gravitationalConstant = 6.67 * 10 ** -11;
function forceOfGravity(m1, m2, r) {
  let force = (gravitationalConstant * m1 * m2) / r ** 2;
  return force;
}

console.log(forceOfGravity(300, 500, 50))