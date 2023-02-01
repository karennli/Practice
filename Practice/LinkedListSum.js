class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    const newLinkedList = new LinkedList(0);
    let currentNode = newLinkedList;
    let carry = 0;
  
    let firstNode = linkedListOne;
    let secondNode = linkedListTwo;
    while(firstNode !== null || secondNode !== null || carry!==0){
      firstValue = firstNode ? firstNode.value : 0;
      secondValue = secondNode ? secondNode.value : 0;
      sum = firstValue + secondValue + carry;
      //calc value of new node
      newValue = sum%10;
      carry = (sum - sum%10 )/10;
      //assign new node
      newNode = new LinkedList(newValue)
      currentNode.next = newNode;
      currentNode = newNode;
      //move to next node on list one and two
      firstNode = firstNode !== null ? firstNode.next : null;
      secondNode = secondNode !== null ? secondNode.next : null;
    }
    return newLinkedList.next;
  }