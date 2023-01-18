function hasSingleCycle(array) {
    let count = 0;
    let currentIdx = 0;
      while(count<array.length){    
        if(count>0 && currentIdx === 0) return false
        count++
        currentIdx = getNextIdx(currentIdx, array);
      }
      return currentIdx === 0; 
    }
    
    function getNextIdx(currentIdx, array){
      const nextIdx = (currentIdx + array[currentIdx]) % array.length;
      return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
    }

    console.log(hasSingleCycle([2,2,-1]));
    console.log(hasSingleCycle([2,3,2]));