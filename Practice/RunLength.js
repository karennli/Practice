function runLengthEncoding(string) {
    let stringArr = string.split('');
    let runLengths = [];
    let count = 1; 
    for(let i in string){
        //next char is the same
       if(stringArr[i]===stringArr[i*1+1]){
        //if count is coming up to 9 
         if(count === 9){ 
              runLengths.push('9'+stringArr[i]);
              count = 1; 
         }
         else{ count++}; 
       }
       else{
        //next char isn't the same
        runLengths.push(count+stringArr[i]);
        count = 1; 
       }
    }
    return runLengths.join('');
  }
//should output 2A3B1C
  console.log(runLengthEncoding('AAAAAAAAAABBBC'))