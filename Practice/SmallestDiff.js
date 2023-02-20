function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let min = Number.MAX_SAFE_INTEGER;
    let pair = [];

    let ptOne = 0; let ptTwo = 0;
    while (ptOne < arrayOne.length && ptTwo < arrayTwo.length) {
        const diff = Math.abs(arrayOne[ptOne] - arrayTwo[ptTwo]);
        if (diff < min) {
            min = diff
            pair = [arrayOne[ptOne], arrayTwo[ptTwo]]
        }
        arrayOne[ptOne] < arrayTwo[ptTwo] ? ptOne++ : ptTwo++;
    }
    return pair;
}