let firstArray = [1, 2, 3, 4]
let secondArray = [2, 4, 6]
const offset = 1

// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   arr1.push(...arr2)
//   let newArray = arr1
//     for (let i = 0; i < newArray.length; i++) {
//       let j = i + offset
//       const temp = newArray[j]
//       newArray[j] = 
//     }
//     console.log(newArray)
// }

const mixArrayWRTOffset = (arr1, arr2, offset) => {
  let newArray = []
  let i = arr1.length
  let j = arr2.length

  for(let i = 0; i < j; i++){
    newArray.push(arr1[i], arr2[j])
  }
  newArray.push(...arr1.slice(j), ...arr2.slice(j))
  console.log(newArray)
}

// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   console.log(...arr1, ...arr2)  
// }

mixArrayWRTOffset(firstArray, secondArray, offset)

