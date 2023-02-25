function threeNumberSum(array, targetSum) {
    const sorted = array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum === targetSum) {
                result.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                right--;
            }
            else if (sum < targetSum) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return result;
}