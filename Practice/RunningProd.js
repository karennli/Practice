function arrayOfProducts(array) {
    let result = [1];
    let runningProduct = 1;
    //L->R
    for (let i = 0; i <= array.length - 2; i++) {
        runningProduct *= array[i];
        result.push(runningProduct);
    }
    runningProduct = 1;
    //R->L
    for (let i = array.length - 1; i >= 0; i--) {
        result[i] *= runningProduct;
        runningProduct *= array[i];
    }
    return result;
}