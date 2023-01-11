function kadanesAlgorithm(array) {
  let maxSums = [];

  for(let i in array){
    let max = [array[i]]; //[-9, -4, ]
    let pointer = i-1;   //0
    while(pointer>=0){
      //find all sums of subarray ending at i 
        max.push(max[max.length-1]+array[pointer]); 
        pointer--; 
    }
   maxSums.push(Math.max(...max));
  }
  return Math.max(...maxSums);
}

//should output 19
console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));
