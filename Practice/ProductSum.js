function productSum(array, depth = 1) {
    let sum = 0;
    for (let i of array) {
        if (Array.isArray(i)) {
            const deepSum = productSum(i, depth + 1)
            sum += (depth + 1) * deepSum
        }
        else {
            sum += i;
        }
    }
    return sum;
}