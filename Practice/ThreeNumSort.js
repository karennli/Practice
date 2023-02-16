function threeNumberSort(array, order) {
    let counts = [0, 0, 0]
    for (let num of array) {
        if (num === order[0]) { counts[0]++ };
        if (num === order[1]) { counts[1]++ };
        if (num === order[2]) { counts[2]++ };
    }
    array.fill(order[0], 0, counts[0]);
    array.fill(order[1], counts[0], counts[0] + counts[1]);
    array.fill(order[2], counts[0] + counts[1])
    return array;
}