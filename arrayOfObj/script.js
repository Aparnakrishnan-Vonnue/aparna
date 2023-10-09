// let inputArray = [
//   [100, { name: "A" }],
//   [101, { name: "D" }],
//   [102, { name: "B" }],
//   [103, { name: "A" }],
//   [104, { name: "C" }],
//   [105, { name: "D" }],
//   [106, { name: "B" }],
//   [107, { name: "C" }],
//   [108, { name: "A" }],
// ];

// function groupCommonNames(arr) {
//   let nameIdObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (nameIdObj[arr[i][1].name]) {
//       nameIdObj[arr[i][1].name] = [...nameIdObj[arr[i][1].name], arr[i][0]];
//     } else {
//       nameIdObj[arr[i][1].name] = [arr[i][0]];
//     }
//   }
//   return nameIdObj;
// }

// let timeArray = [
//   {
//     100: {
//       hour: 12,
//       days: 137,
//       month: 57,
//     },
//     101: {
//       hour: 24,
//       days: 222,
//       month: 23,
//     },
//     102: {
//       hour: 15,
//       days: 182,
//       month: 12,
//     },
//     103: {
//       hour: 22,
//       days: 111,
//       month: 20,
//     },
//     104: {
//       hour: 10,
//       days: 122,
//       month: 28,
//     },
//     105: {
//       hour: 8,
//       days: 185,
//       month: 28,
//     },
//     106: {
//       hour: 18,
//       days: 121,
//       month: 16,
//     },
//     107: {
//       hour: 11,
//       days: 132,
//       month: 25,
//     },
//     108: {
//       hour: 52,
//       days: 141,
//       month: 35,
//     },
//   },
// ];

// function groupIdAndTime() {
//   let inputObj = groupCommonNames(inputArray);
//   let timeIdObj = {}
//   for (let i = 0; i < timeArray.length; i++) {
//     Object.entries(timeArray[i]).forEach(([key, value]) => {
//       Object.entries(inputObj).forEach(([name, idArray]) => {
//         idArray.forEach((id) => {
//           if (key == id) {
//            timeIdObj[name] = {...timeIdObj[name],[id]: value}
//           }
//         });
//       });
//     });
//   }
//   return timeIdObj
// }
// console.log(groupIdAndTime());

let inputArray = [
  [100, { name: "A" }],
  [101, { name: "D" }],
  [102, { name: "B" }],
  [103, { name: "A" }],
  [104, { name: "C" }],
  [105, { name: "D" }],
  [106, { name: "B" }],
  [107, { name: "C" }],
  [108, { name: "A" }],
];

let timeArray = {
  100: {
    hour: 12,
    days: 137,
    month: 57,
  },
  101: {
    hour: 24,
    days: 222,
    month: 23,
  },
  102: {
    hour: 15,
    days: 182,
    month: 12,
  },
  103: {
    hour: 22,
    days: 111,
    month: 20,
  },
  104: {
    hour: 10,
    days: 122,
    month: 28,
  },
  105: {
    hour: 8,
    days: 185,
    month: 28,
  },
  106: {
    hour: 18,
    days: 121,
    month: 16,
  },
  107: {
    hour: 11,
    days: 132,
    month: 25,
  },
  108: {
    hour: 52,
    days: 141,
    month: 35,
  },
};

function groupTimeId(iArray, timeArray) {
  let timeIdObj = {};
  iArray.forEach((input) => {
    Object.entries(timeArray).forEach(([key, value]) => {
      if (input[0] == key)   timeIdObj[input[1].name] = {...timeIdObj[input[1].name],[input[0]]: value}
    });
  });
  return timeIdObj
}

console.log(groupTimeId(inputArray, timeArray));
