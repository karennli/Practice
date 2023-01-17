class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      let queue = [];
      array.push(this.name)
      queue.push(...this.children)
      for(let i of queue){
        array.push(i.name)
        queue.push(...i.children)
      }
      return array; 
    }
  }

  const test = new Node("testing");
  const one = test.addChild("one");
  const two = test.addChild("two");
  one.addChild('three')

  console.log(test.breadthFirstSearch([]))