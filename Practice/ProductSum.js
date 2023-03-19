function productSum(array, depth = 1) {
    let sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (Array.isArray(array[i])) {
            const deepSum = productSum(array[i], depth + 1)
            sum += (depth + 1) * deepSum
        }
        else {
            sum += array[i];
        }
    }
    return sum;
}