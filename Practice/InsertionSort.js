function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (array[j] < array[j - 1] && j > 0) {
            swap(j, j - 1, array)
            j--;
        }
    }
    return array;
}

function swap(indexOne, indexTwo, array) {
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}