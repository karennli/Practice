function isValidSubsequence(array, sequence) {
    for (let i of array) {
        if (i === sequence[0]) { sequence.shift(); }
    }
    return sequence.length === 0
}

console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 4]))