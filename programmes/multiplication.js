//function that generates the multiplication table for a given number

function getProductTable(num, limit){
    let table = []
    for(let i = 0; i <= limit; i++){
        table.push(`${num} * ${i} = ${num * i}`)
    }

    return table
}

console.log(getProductTable(5, 10))