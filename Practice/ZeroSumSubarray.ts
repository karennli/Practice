export function zeroSumSubarray(nums: number[]) {
    const sums = new Set([0]);
    let currentSum = 0;

    for (const i of nums) {
        currentSum += i;
        if (sums.has(currentSum)) {
            return true;
        }
        sums.add(currentSum);
    }
    return false;
}