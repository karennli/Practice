function generateDocument(characters, document) {
    let characterCount = {};

    for (const char of characters) {
        if (!(char in characterCount)) {
            characterCount[char] = 0;
        }
        characterCount[char]++;
    }

    for (const char of document) {
        if (!(char in characterCount) || characterCount[char] === 0) {
            return false
        }
        characterCount[char]--;
    }
    return true;
}