function cycleInGraph(edges) {
    let visited = new Array(edges.length).fill(false);
    let currentlyInStack = new Array(edges.length).fill(false);

    //traverse all nodes
    for (let node = 0; node < edges.length; node++) {
        if (visited[node]) {
            continue;
        }
        //does node starting at "node" contain cycle? 
        const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
        if (containsCycle) {
            return true
        };
    }
    return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;

    const neighbors = edges[node];
    for (let neighbor of neighbors) {
        //DFS traversal
        if (!visited[neighbor]) {
            const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack);
            if (containsCycle) { return true; }
        }
        //this node has a loop
        else if (currentlyInStack[neighbor]) { return true; }
    }
    currentlyInStack[node] = false;
    return false;
}