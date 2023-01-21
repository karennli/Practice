function firstDuplicateValue(array) {
     let traveled = new Map();
     for(let i in array){
        if(traveled.has(array[i])) return array[i];
        else traveled.set(array[i], ':)')
     }
     return -1; 
  }