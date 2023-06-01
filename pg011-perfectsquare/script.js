let integer = 10
function perfectSquare(){
  for(let i = 0; i < integer; i++){
    if(integer/i === i){
      return true
    }
  }
  return false
}

console.log(perfectSquare(integer))