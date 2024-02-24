import React, { useState } from "react";

export const Component = () => {
  const [childState, setChildState] = useState();
  console.log(childState);
  return (
    <>
      <div
        className="box"
        style={{ backgroundColor: childState ? "red" : "black" }}
        onClick={() => setChildState(!childState)}
      >
        jhvjjh
      </div>
    </>
  );
};
