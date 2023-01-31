function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length - 1;
    while(i<j){
      //swap value at i and j
      if(array[i]===toMove && array[j]!==toMove){
        let iValue = array[i];
        let jValue = array[j];
        array[i] = jValue; array[j]=iValue;
      }
      //move i right
      if(array[i]!==toMove) i+=1;
      //move j left
      if(array[j]==toMove)  j-=1;
      
    }
    return array
  }

  console.log(moveElementToEnd([1,2,3,2,3,3,2], 2))