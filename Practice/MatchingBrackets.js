function balancedBrackets(string) {
    const brackets = { '}': '{', ']': '[', ')': '(' };
    const openings = '{[('
    let stack = [];

    for (let char of string) {
        if (openings.includes(char)) {
            stack.push(char)
        }
        if (char in brackets) {
            const matching = stack.pop();
            if (matching !== brackets[char]) return false
        }
    }
    return stack.length === 0;
}

console.log(balancedBrackets('[{}]]'))