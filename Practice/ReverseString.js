function reverseWordsInString(string) {
    let newString = '';
    //reverse the whole string
    const reversedString = reverse(string);
    //keep track of words within string
    let word = '';
    for (let char of reversedString) {
        if (char !== ' ') {
            word += char;
        }
        if (char === ' ') {
            //if word has ended
            if (word) {
                newString += reverse(word);
                word = ''
            }
            newString += ' ';
        }
    }
    //catches last word 
    word ? newString += reverse(word) : '';
    return newString;
}

function reverse(string) {
    let reversed = '';
    for (let char = string.length - 1; char >= 0; char--) {
        reversed += string[char];
    }
    return reversed;
}