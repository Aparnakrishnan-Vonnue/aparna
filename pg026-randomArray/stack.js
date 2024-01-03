//use stack to reverse a string
//add a function peek() to return the value in the current top without modifying the top.
//take an  expression eg: 5+4+3+20-40
function newStack(maxVal) {
  let store = [];
  let top = 0;
  let max = maxVal;

  function isEmpty() {
    return top === 0;
  }

  function isMax() {
    return top === max;
  }

  function push(val) {
    let cond = false;
    if (!isMax()) {
      store[top] = val;
      top += 1;
      cond = true;
    }
    return cond;
  }

  function pop() {
    if (!isEmpty()) {
      top -= 1;
      return store[top];
    }
  }

  function peek() {
    return top;
  }

  return { isEmpty, push, pop, peek };
}
let x = newStack(10);

// console.log(x.push(50));
// console.log(x.push(80));
// console.log(x.push(100));
// console.log(x.pop());
// console.log(x.pop());
// console.log(x.peek());

//reverse a string
function reverseString(inputString) {
  const stack = newStack(inputString.length);

  for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString[i]);
  }

  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const originalString = "hey prabhu! yeh kya hua";
console.log(reverseString(originalString));

//Evaluate an expression without using eval

function evaluateExpression(expression) {
  const numberStack = newStack(expression.length);
  const operatorStack = newStack(expression.length);
  let result = 0;
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const currentChar = expression[i];
    if(!isNaN(parseInt(expression[i]))){
      currentNumber += currentChar
    } else {
      numberStack.push(currentNumber);
      operatorStack.push(currentChar)
      currentNumber = ""
    }

    if (i === expression.length - 1) {
      numberStack.push(currentNumber);
    }

  }

  while (!operatorStack.isEmpty()) {
    const operand1 = +numberStack.pop();
    const operand2 = +numberStack.pop();
    const operator = operatorStack.pop();
    if (operator === "-") {
      operand1 > operand2
        ? (result = operand1 - operand2)
        : (result = operand2 - operand1);
      numberStack.push(result);
    } else if (operator === "+") {
      result = operand1 + operand2;
      numberStack.push(result);
    }
  }
  return numberStack.pop();
}

console.log(evaluateExpression("25+60-20"));
