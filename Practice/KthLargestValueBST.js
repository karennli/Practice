class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    let kthLargestValue = null;
    let count = 0;

    function reverseTraverse(tree) {
        if (tree === null) return;

        reverseTraverse(tree.right)
        if (count === k) return;
        kthLargestValue = tree.value
        count++;
        reverseTraverse(tree.left)
    }

    reverseTraverse(tree);
    return kthLargestValue;
}