function mergeOverlappingIntervals(array: number[][]) {
    //sort ascending by start value
    array = array.sort((a, b) => { return a[0] - b[0] });
    if (array.length === 1) return array;

    //compare interval to previous interval
    for (let i: number = 1; i <= array.length; i++) {
        const prevInterval = array[i - 1];
        const currentInterval = array[i]
        if (!!prevInterval && !!currentInterval && prevInterval[1] >= currentInterval[0]) {
            const merged: number[] = merge(prevInterval, array[i]);
            array[i] = merged;
            array.splice(i - 1, 1);
            //need to check new merged interval against next intervals
            i--
        }
    }

    return array;
}

function merge(lowerInterval: number[], higherInterval: number[]) {
    const nums: number[] = lowerInterval.concat(higherInterval)
    const newInterval: number[] = [Math.min(...nums), Math.max(...nums)]
    return newInterval;
}