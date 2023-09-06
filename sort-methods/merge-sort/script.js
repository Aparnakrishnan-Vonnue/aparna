const arrayToMerge = [2, 1, 10, 5, 8, 15, 30]

function mergeSort(arrayToMerge){
    let subArrayOne = []
    let subArrayTwo = []
    let singleElementArray = []
    // let lengthOfMainArray = arrayToMerge.length
        let midPoint = Math.floor(arrayToMerge.length / 2)
        for(let j = 0; j < midPoint; j++){
            subArrayOne.push(arrayToMerge[j])

        }   
        for(let k = midPoint; k < arrayToMerge.length; k++){
            subArrayTwo.push(arrayToMerge[k])
        }
    console.log(subArrayOne, subArrayTwo)
    if(subArrayOne.length !== 1 && subArrayTwo.length !== 1){
        midPoint = Math.floor(subArrayOne.length / 2)
        arrayToMerge = []
        for(let i = 0; i <= midPoint; i++){
            arrayToMerge.push(subArrayOne[i])
        }
        console.log(arrayToMerge)
        if(arrayToMerge.length !== 1){
            
        }
        arrayToMerge = []
        for(let j = midPoint + 1; j < subArrayOne.length; j++){
            arrayToMerge.push(subArrayOne[j])
        }
        console.log(arrayToMerge)
    }
}
console.log(mergeSort(arrayToMerge))