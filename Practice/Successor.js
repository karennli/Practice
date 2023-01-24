class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    if(node.right !== null){
      let rightNode = node.right; 
      while(rightNode.left){
        rightNode = rightNode.left;
      }
      return rightNode;
    }
    else if(node.parent){
      let parentNode = node.parent;
      if(parentNode.left === node) return parentNode;
      while(parentNode.parent){
        if(parentNode.parent.left === parentNode)
          return parentNode.parent;
        parentNode = parentNode.parent;
      }
    }
    return null;
  }

  