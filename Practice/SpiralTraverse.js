function spiralTraverse(array) {
    let spiral = [];
    const columns = array[0].length;
    const rows = array.length;

    //top row
    spiral = spiral.concat(array[0]);
    //down the right side
    for (let r = 1; r <= rows - 2; r++) {
        spiral.push(array[r][columns - 1])
    }
    //bottom row r->l
    if (rows > 1) {
        let bottom = array[rows - 1].reverse();
        spiral = spiral.concat(bottom);
    }
    //up the left side
    if (columns > 1) {
        for (let r = rows - 2; r >= 1; r--) {
            spiral.push(array[r][0])
        }
    }

    if (spiral.length !== columns * rows) {
        const newArray = [];
        for (let r = 1; r <= rows - 2; r++) {
            let add = array[r];
            add.shift(); add.pop();
            add !== [] ? newArray.push(add) : '';
        }
        const newSpiral = spiralTraverse(newArray);
        spiral = spiral.concat(newSpiral)
    }

    return spiral;
}

console.log(spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
]))