class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let swapIdx;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                swapIdx = childTwoIdx;
            } else {
                swapIdx = childOneIdx;
            }
            if (heap[swapIdx] < heap[currentIdx]) {
                this.swap(currentIdx, swapIdx, heap);
                currentIdx = swapIdx;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
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
        this.swap(0, this.heap.length - 1, this.heap);
        const removed = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return removed;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap)
    }

    swap(i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}