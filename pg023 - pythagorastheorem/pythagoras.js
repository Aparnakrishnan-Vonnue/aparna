//find out the pythagorean triplets less than 100

function pythagoreanTriplets(limit) {
  let pythagoreanTripletsArray = [];
  let triplets = [];
  for (let i = 0; i <= limit; i++) {
    triplets = [];
    if (i % 2 === 0) {
      triplets.push(i, (i / 2) * (i / 2) - 1, (i / 2) * (i / 2) + 1);
    } else {
      triplets.push(i, (i * i) / 2 - 0.5, (i * i) / 2 + 0.5);
    }

    pythagoreanTripletsArray.push(triplets);
  }
  return pythagoreanTripletsArray;
}

console.log(pythagoreanTriplets(50));
