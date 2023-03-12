class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
    }

    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        let childTwoIdx = currentIdx * 2 + 2;
        let smallerChildIdx = heap[childOneIdx] < heap[childTwoIdx] ? childOneIdx : childTwoIdx;

        while (currentIdx > endIdx && heap[currentIdx] > heap[childOneIdx] && heap[currentIdx] > heap[childTwoIdx]) {
            this.swap(currentIdx, smallerChildIdx, heap);
            currentIdx = smallerChildIdx;
            childOneIdx = currentIdx * 2 + 1;
            childTwoIdx = currentIdx * 2 + 2;
            smallerChildIdx = heap[childOneIdx] < heap[childTwoIdx] ? childOneIdx : childTwoIdx;
        }
    }

    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2);
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
    }

    insert(value) {
    }

    swap(i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}