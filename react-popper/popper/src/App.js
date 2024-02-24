import React, { useState } from "react";
// import { Component } from "./Component";
// import Confetti from './Confetti';
import "./App";
import { Component } from "./Component";
function App() {
  const [parentState, setParentState] = useState(true);

  function testFn() {
    let testArray = [];
    for (let i = 0; i < 5; i++) {
      // testArray.push(<Component />);
      testArray.push(<Component />);
    }
    return testArray;
  }

  return <div className="App">{testFn()}zsflgnzsnfg</div>;
}

export default App;
