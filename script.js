function decimalToBinary (decimalNumber, bit = 0, convertedBinary = null) {
    if (decimalNumber < 2) {
        return;
    };

    let highestBit;

    if (bit === 0) {
        console.log('checking highest bit');
        for (bit; (decimalNumber / (2 ** bit) >= 1); bit++) {
            continue;
        };
        highestBit = bit - 1;
        console.log('highest bit is: ', highestBit);
    } else if (bit !== 0) {
        console.log('branching off into recursion.');
        return;
    }

    const newValue = decimalNumber - 2 ** highestBit;
    console.log('new value is: ', newValue);
    decimalToBinary(newValue, highestBit);
}

decimalToBinary(300);