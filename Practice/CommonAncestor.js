class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    const depthOne = getDepth(descendantOne, topAncestor);
    const depthTwo = getDepth(descendantTwo, topAncestor)
    if (depthOne > depthTwo) {
        return traverseAncestors(descendantOne, descendantTwo, depthOne - depthTwo)
    }
    else {
        return traverseAncestors(descendantTwo, descendantOne, depthTwo - depthOne)
    }
}

function getDepth(descendent, topAncestor) {
    let depth = 0;
    while (descendent != topAncestor) {
        depth++;
        descendent = descendent.ancestor;
    }
    return depth;
}

function traverseAncestors(lower, higher, diff) {
    //get descendent pointer to same height
    while (diff > 0) {
        lower = lower.ancestor;
        diff--;
    }
    //now traverse up the tree
    while (lower != higher) {
        lower = lower.ancestor;
        higher = higher.ancestor
    }
    //when lower = higher  
    return lower;
}