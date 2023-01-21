function oneEdit(stringOne, stringTwo) {
    //strings are same length
    if(stringOne.length===stringTwo.length){
        if(stringOne === stringTwo) return true;
        let diff = 0; 
        for(let i in stringOne){
            if (stringOne[i] !== stringTwo[i]){
                diff++;
            }
        }
        if(diff <=1 ) return true;
    }
    //strings have 1 difference in length
    if(Math.abs(stringOne.length - stringTwo.length) === 1){
        //can 1 be taken from the longer to get the shorter string? 
        const shorter = stringOne.length>stringTwo.length ? stringTwo : stringOne;
        const longer = shorter === stringTwo ? stringOne : stringTwo;
        for(let i in longer){
            let longerSub = longer.split('')
            longerSub[i]=''; 
            if(longerSub.join('') === shorter) return true;
        }
    }
    return false;
  }

  console.log(oneEdit("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmmnopqrstuvwxyz"))