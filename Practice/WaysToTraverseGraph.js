function numberOfWaysToTraverseGraph(width, height) {
    const numberOfWays = [];
    for (let i = 0; i < height + 1; i++) {
        numberOfWays.push([]);
        for (let j = 0; j < width + 1; j++) {
            numberOfWays[i].push(0)
        }
    }

    for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
        for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
            if (widthIdx === 1 || heightIdx === 1) {
                numberOfWays[heightIdx][widthIdx] = 1;
            }
            else {
                numberOfWays[heightIdx][widthIdx] = numberOfWays[heightIdx - 1][widthIdx] + numberOfWays[heightIdx][widthIdx - 1];
            }
        }
    }
    return numberOfWays[height][width];
}