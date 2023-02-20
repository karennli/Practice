class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function symmetricalTree(tree) {
    let stackLeft = [tree.left];
    let stackRight = [tree.right];

    while (stackLeft.length > 0) {
        let left = stackLeft.shift();
        let right = stackRight.shift();

        if (left === null && right === null) {
            continue;
        }
        if (left === null || right === null || left.value !== right.value) {
            return false;
        }

        stackLeft.push(left.left);
        stackLeft.push(left.right);
        stackRight.push(right.right);
        stackRight.push(right.left);
    }

    return true;
}