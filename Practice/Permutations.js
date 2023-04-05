function getPermutations(array) {
    const result = [];
    //base case
    if (array.length === 1) return [[...array]];

    for (let i = 0; i <= array.length - 1; i++) {
        let n = array.shift();
        const perms = getPermutations(array);
        console.log('perms: ', perms)
        for (let p of perms) {
            p = [...p, n];
            result.push(p);
        }
        array.push(n);
    }
    return result;
}
console.log(getPermutations([1, 2, 3]))