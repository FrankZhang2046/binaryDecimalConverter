function decimalToBinary (decimalNumber, bit = 0, convertedBinary = null) {
    if (decimalNumber === 1 ) {
        if (convertedBinary === null) {return console.log(decimalNumber)}
        else return console.log(`${convertedBinary}${'0'.repeat(bit-1)}1`)
    };

    let highestBit;

    if (bit === 0) {
        if (decimalNumber === 0 && convertedBinary !== null) {
            return console.log(convertedBinary);
        }
        for (bit; (decimalNumber / (2 ** bit) >= 1); bit++) {
            continue;
        };
        highestBit = bit - 1;
        const newValue = decimalNumber - 2 ** highestBit;
        if (newValue === 0) {
            if (convertedBinary === null) {
                return console.log('1' + '0'.repeat(highestBit));
            } else return console.log(`${convertedBinary}1${'0'.repeat(highestBit)}`)
        }
        decimalToBinary(newValue, highestBit, '1');
    } else if (bit !== 0) {
        if (convertedBinary === null) {
            convertedBinary = 1;
        }
        if (decimalNumber / (2 ** (bit - 1)) >= 1) {
            convertedBinary = `${convertedBinary}1`;
            highestBit = bit - 1;
            const newValue = decimalNumber - 2 ** highestBit;
            decimalToBinary(newValue, highestBit, convertedBinary);
        } else {
            convertedBinary = `${convertedBinary}0`;
            highestBit = bit - 1;
            decimalToBinary(decimalNumber, highestBit, convertedBinary);
        }
    }
}

// decimalToBinary(19921227197704231992122719770423);
decimalToBinary(900719925474088);