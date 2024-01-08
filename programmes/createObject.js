//function to create an object representing a car with properties like make, model and year

function carDetails(make, model, year) {
  let carObj = {
    make: make,
    model: model,
    yearOfManufacture: year,
  };
  return carObj;
}

console.log(carDetails("Ford", "Ford T", "1902"));
