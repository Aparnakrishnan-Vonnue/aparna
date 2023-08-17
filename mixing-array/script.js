
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

// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   // debugger
//   let newArray = []
//   let i = 0
//   while(i < (arr1.length + arr2.length)){
//     if(i < offset){
//       newArray.push(arr1[i])
//     }
//     else if((i - offset) < arr2.length && i % 2 !== 0){
//       newArray.push(arr2[i])
//     }
//     else{
//       newArray.push(arr1[i - offset])
//     }
//     i++
//   }
//  return newArray
// }

let firstArray = [2, 4, 6, 8]
let secondArray = [3, 5, 7]
const offset = -1  


const mixArrayWRTOffset = (arr1, arr2, offset) => {
  let newArray = []
  let i = 0;
  let j = 0;
  let temp = []
    if (offset < 0){
      temp = arr1
      arr1 = arr2
      arr2 = temp
      while(i < arr1.length && j < arr2.length){
        newArray = newArray.concat(arr1.slice(i, i - offset), arr2.slice(j, j - offset))
        i = i - offset
        j = j - offset  
      }
      newArray = newArray.concat(arr1.slice(i), arr2.slice(j))
    }
  else if(offset >  0){
    while(i < arr1.length && j < arr2.length){
      newArray = newArray.concat(arr1.slice(i, i + offset), arr2.slice(j, j + offset))
      i = i + offset
      j = j + offset
    }
    newArray = newArray.concat(arr1.slice(i), arr2.slice(j))
  }
  else{
    newArray = []
  }
  return newArray
  }



 
// const mixArrayWRTOffset = (arr1, arr2, offset) => {
//   // debugger
//   let newArray = []
//   let i = 0
//   let j = 0
//   let k = 0
//   while(i < arr1.length + arr2.length){
//      if(i < offset){
//         newArray.push(arr1[j])
//         j++;
//      }
//       else if ((i - offset) < arr2.length && i % 2 !== 0){
//         newArray.push(arr2[k])
//         k++;
//       }
//       else{
//         newArray.push(arr1[i - j])
//       }
//       i++
//     }
//     return newArray
//   }



console.log(mixArrayWRTOffset(firstArray, secondArray, offset))

