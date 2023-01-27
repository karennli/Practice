function semordnilap(words) {
    const wordSet = new Set();
    const pairs = [];
    words.forEach((word)=>{
        wordSet.add(word)
    })

    for(let word of words){
        const reverse = word.split('').reverse().join('');
        if(wordSet.has(reverse) && word!==reverse){
            pairs.push([word, reverse]);
            wordSet.delete(word)
            wordSet.delete(reverse)
        } 
    }
        return pairs;
  }

  console.log(semordnilap(['hi', 'bye', 'ih']))
