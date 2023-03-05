//return array of same size with products of ints besides the one at same index

function arrayOfProducts(array) {
    let result = [1];
    let runningProduct = 1;
    //L->R
    for (let i = 0; i <= array.length - 2; i++) {
        runningProduct *= array[i];
        result.push(runningProduct);
    }
    //reset running product
    runningProduct = 1;
    //R->L
    for (let i = array.length - 1; i >= 0; i--) {
        result[i] *= runningProduct;
        runningProduct *= array[i];
    }
    return result;
}