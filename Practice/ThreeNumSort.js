function threeNumberSort(array, order) {
    let [c1, c2, c3] = [0, 0, 0]
    for (let num of array) {
        if (num === order[0]) { c1++ };
        if (num === order[1]) { c2++ };
        if (num === order[2]) { c3++ };
    }
    array.fill(order[0], 0, c1);
    array.fill(order[1], c1, c1 + c2);
    array.fill(order[2], c1 + c2)
    return array;
}