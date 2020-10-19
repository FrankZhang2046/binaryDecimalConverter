function decimalToBinary (decimalNumber, bit = 0, convertedBinary = null) {
    if (decimalNumber < 2 || decimalNumber == NaN) {
        console.log('decimalNumber is ', decimalNumber);
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
        const newValue = decimalNumber - 2 ** highestBit;
        if (newValue === 0) {
            console.log('convertedBinary is: ', convertedBinary);
            if (convertedBinary === null) {
                return console.log('1' + '0'.repeat(highestBit));
            } else return console.log(`${convertedBinary}1${'0'.repeat(highestBit)}`)
        }
        console.log('new value is: ', newValue);
        decimalToBinary(newValue, highestBit);
    } else if (bit !== 0) {
        if (convertedBinary === null) {
            convertedBinary = 1;
        }
        console.log('branching off into recursion.', decimalNumber, bit);
        if (decimalNumber / (2 ** (bit - 1)) >= 1) {
            convertedBinary = `${convertedBinary}1`;
            highestBit = bit - 1;
            const newValue = decimalNumber - 2 ** highestBit;
            console.log('new value is: ', newValue);
            console.log('convertedBinary is: ', convertedBinary);
            decimalToBinary(newValue, highestBit, convertedBinary);
        } else {
            convertedBinary = `${convertedBinary}0`;
            highestBit = bit - 1;
            console.log('convertedBinary is: ', convertedBinary);

            decimalToBinary(decimalNumber, highestBit, convertedBinary);
        }
    }
}

decimalToBinary(5);