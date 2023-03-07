//typescript version
function sortStack(stack: number[]) {
    if (stack.length === 0) return stack;
    const top: number = stack.pop()!;
    sortStack(stack);
    insertStack(stack, top)
    return stack;
}

function insertStack(stack: number[], topValue: number) {
    if (topValue > stack[stack.length - 1] || stack.length === 0) {
        stack.push(topValue);
        return;
    }
    const top: number = stack.pop()!;
    insertStack(stack, topValue);
    stack.push(top);
} 