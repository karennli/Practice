class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let currentNodeOne = linkedListOne;
    let currentNodeTwo = linkedListTwo;

    while (currentNodeOne !== currentNodeTwo) {
        if (currentNodeOne === null) {
            currentNodeOne = linkedListTwo;
        } else {
            currentNodeOne = currentNodeOne.next
        }

        if (currentNodeTwo === null) {
            currentNodeTwo = linkedListOne;
        } else {
            currentNodeTwo = currentNodeTwo.next
        }

    }
    return currentNodeOne;
}