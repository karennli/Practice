function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let time = 0;

    for (let i in queries) {
        let queriesLeft = queries.length - i - 1;
        time += (queries[i] * queriesLeft);
    }
    return time;
}