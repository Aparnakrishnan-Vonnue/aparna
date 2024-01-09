//programme that iterates through an array of object an print specific property of the object

const objectArray = [
  {
    name: "Apple",
    type: "fruit",
    color: "red",
  },
  {
    name: "Orange",
    type: "fruit",
    color: "orange",
  },
  {
    name: "Brinjal",
    type: "vegetable",
    color: "violet",
  },
  {
    name: "Tomato",
    type: "fruit",
    color: "red",
  },
];

function printObjectProperty(objArr) {
  let propertyArr = [];
  objArr.forEach((obj) => {
    propertyArr.push(obj.type);
  });
  return propertyArr
}

console.log(printObjectProperty(objectArray));
