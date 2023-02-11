function isValidSubsequence(array, sequence) {
    let changedSequence = [...sequence]
    for (let i of array) {
        if (i === changedSequence[0]) { changedSequence.shift(); }
    }
    return changedSequence.length === 0
}

console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 4]))