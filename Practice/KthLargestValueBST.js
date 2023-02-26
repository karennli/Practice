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
        count++
        if (count === k) {
            kthLargestValue = tree.value;
            return;
        }
        reverseTraverse(tree.left)
    }
    reverseTraverse(tree);
    return kthLargestValue;
}