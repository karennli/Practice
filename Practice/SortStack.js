//javascript version
function sortStack(stack) {
    if (stack.length === 0) return stack;
    const top = stack.pop();
    sortStack(stack);
    insertStack(stack, top)
    return stack;
}

function insertStack(stack, topValue) {
    if (topValue > stack[stack.length - 1] || stack.length === 0) {
        stack.push(topValue);
        return;
    }
    const top = stack.pop();
    insertStack(stack, topValue);
    stack.push(top);
}
