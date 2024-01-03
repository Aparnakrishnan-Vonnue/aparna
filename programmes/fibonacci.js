//function to generate fibonacci sequence up to a number

function newStack(maxVal) {
  let top = 0;
  let max = maxVal;
  let store = [];

  function isEmpty() {
    return top === 0;
  }

  function isMax() {
    return top === max;
  }

  function push(val) {
    let isPushed = false;
    if (!isMax()) {
      store[top] = val;
      top += 1;
      isPushed = true;
    }
    return isPushed;
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

  return { isEmpty, isMax, push, pop, peek };
}

function fibonacciSeries(n) {
  let fibStack = newStack(n);
  fibStack.push(0);
  fibStack.push(1);
    let num1 = fibStack.pop();
    let num2 = fibStack.pop();
    // console.log(num1, num2)
    fibStack.push(num1 + num2)
    
}

console.log(fibonacciSeries(10));
