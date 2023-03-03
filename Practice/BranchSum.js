class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sums = [];
    passDown(root, 0, sums)
    return sums;
}

function passDown(node, sum, sumList) {
    if (!node) return;

    const newSum = sum + node.value;
    if (!node.left && !node.right) {
        sumList.push(newSum);
        return;
    }
    passDown(node.left, newSum, sumList);
    passDown(node.right, newSum, sumList);
}