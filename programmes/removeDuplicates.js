//function to remove duplicates from an array

function removeDuplicates(arr){
    for(let i = 0; i <= arr.length; i++){
        for(let j = i + 1; j <= arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1)
            }
        }
    }
    return arr
}

console.log(removeDuplicates( [5, 5, 5, 5, 5]))

//test case
const testObj = [
    {
        inputArray: [1, 5, 5, 6, 2, 8, 1, 6, 5],
        expectedOutput: [1, 5, 6, 2, 8]
    },
    {
        inputArray: [5, 5, 5, 5, 5],
        expectedOutput: [5]
    },
    {
        inputArray: ['apple', 'banana', 'orange', 'apple'],
        expectedOutput: [ 'apple', 'banana', 'orange' ]
    },
    {
        inputArray: ['tree', 'plant', 'herb', 'shrub'],
        expectedOutput: ['tree', 'plant', 'herb', 'shrub']
    },
]