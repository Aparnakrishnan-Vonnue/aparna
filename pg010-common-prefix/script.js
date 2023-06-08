
// console.log(smalllest(listOfStrings))

// function longestCommonPrefix(arr){
  //   let prefix = ""
  //   for(let i = 0; i < arr.length; i++){
    //     for (let j = 0; j <= i; j++){
      //       if(arr[i + 1] === arr.length){
        //         i = -1
        //       if(arr[i][j] === arr[i + 1][j]){
          //         prefix += ar
          //         }
          //       }
          //     }
          //   }
          // }
          
          // console.log(longestCommonPrefix(listOfStrings))
          
          // function returnSmallWord(list) {
            //   // debugger
            //   let smallestWordidx = 0;
            
            //   for (let i = 0; i < list.length-1; i++) {
              //     if (list[i].length < list[i + 1].length) {
                //       smallestWordidx = i
                //     }
                
                //   }
                //   list.splice(smallestWordidx,smallestWordidx);
                //   return [list, smallestWordidx]
                // }
                
                // // console.log(returnSmallWord(listOfStrings))
                
                // let idx, modifiedList
                // [modifiedList, idx] = returnSmallWord(listOfStrings)
                
                // function longestCommonPrefix(smallestWord, list) {
                  
                  //   let longestPrefix = "";
                  
                  //   for (let i = 0; i < smallestWord.length; i++) {
                    //     for (let j = 0; j < list.length; j++) {
                      //       if (smallestWord[i] == list[j][i]) {
                        //         tempPrefix = ""
                        //         longestPrefix += list[j][i];
                        //         return longestPrefix;
                        //       } else {
                          //       }
                          //     }
                          //   }
                          //   return longestPrefix;
                          // }
                          
                          // console.log(longestCommonPrefix(listOfStrings[idx], modifiedList))
    let listOfStrings = ["flower", "flow", "flight", "f" ];

    // let listOfStrings = ["apple", "app", "application"]

    function longestCommonPrefix(list){
      let i = 0;
      let smallestOfList = list[0]
     
      while(i < list.length - 1){
          if(list[i].length < list[i + 1].length){
            smallestOfList = list[i]
          }
          i++
        }
        
        let tempStorageOne = ""
        let tempStorageTwo = smallestOfList
        for(let j = 0; j < list.length; j++){
          let word = list[j]
          if(word === smallestOfList ){
            continue;
          }
          tempStorageOne = ""
          for (let k = 0; k < smallestOfList.length; k++){
            if(word[k] === smallestOfList[k]){
              tempStorageOne += word[k]
            }     
            if(tempStorageOne.length < tempStorageTwo.length){
              tempStorageTwo = tempStorageOne
            }
        }
        
        }
        return tempStorageTwo
    }

    console.log(longestCommonPrefix(listOfStrings))