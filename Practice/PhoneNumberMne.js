function phoneNumberMnemonics(phoneNumber) {
    let keypad = {
        '1': ['1'],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': ['0']
    }

    let mneFound = [];
    let currentMne = [...phoneNumber];

    function pickChar(idx) {
        if (idx >= phoneNumber.length) {
            const mnemonic = currentMne.join('');
            mneFound.push(mnemonic);
            return;
        }
        const letters = keypad[phoneNumber[idx]];
        for (let letter of letters) {
            currentMne[idx] = letter;
            pickChar(idx + 1)
        }
    }
    pickChar(0);
    return mneFound;
}

console.log(phoneNumberMnemonics('1234'))