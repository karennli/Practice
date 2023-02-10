function firstNonRepeatingCharacter(string) {
    let freq = {}
    for (let i of string) {
        if (i in freq) {
            freq[i] += 1;
        }
        else {
            freq[i] = 1
        }
    }

    for (let i of string) {
        if (freq[i] === 1) return string.indexOf(i)
    }

    return -1;
}