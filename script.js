function decimalToBinary (decimalNumber=1, bit = 0, convertedBinary = null) {
    if (decimalNumber === 1 ) {
        if (convertedBinary === null) {return ( decimalNumber)}
        else return (`${convertedBinary}${'0'.repeat(bit-1)}1`)
    };

    let highestBit;

    if (bit === 0) {
        if (decimalNumber === 0 && convertedBinary !== null) {
            (decimalNumber, convertedBinary)
            const returnVal = convertedBinary;
            return (returnVal);
        }
        for (bit; (decimalNumber / (2 ** bit) >= 1); bit++) {
            continue;
        };
        highestBit = bit - 1;
        const newValue = decimalNumber - 2 ** highestBit;
        if (newValue === 0) {
            if (convertedBinary === null) {
                return ('1' + '0'.repeat(highestBit));
            } else return (`${convertedBinary}1${'0'.repeat(highestBit)}`)
        }
        return decimalToBinary(newValue, highestBit, '1');
    } else if (bit !== 0) {
        if (convertedBinary === null) {
            convertedBinary = 1;
        }
        if (decimalNumber / (2 ** (bit - 1)) >= 1) {
            convertedBinary = `${convertedBinary}1`;
            highestBit = bit - 1;
            const newValue = decimalNumber - 2 ** highestBit;
            return decimalToBinary(newValue, highestBit, convertedBinary);
        } else {
            convertedBinary = `${convertedBinary}0`;
            highestBit = bit - 1;
            return decimalToBinary(decimalNumber, highestBit, convertedBinary);
        }
    }
}

let incrementer = 1;

const functionValidator = setInterval(() => {
    if (incrementer < (2**53 - 1)) {
        const myResult = Number(decimalToBinary(incrementer));
        const officialResult = Number(incrementer.toString(2));
        console.log(`binary of ${incrementer} is: `);
        console.log(myResult);
        console.log(officialResult);
        if (myResult === officialResult) {
            incrementer++;
        } else if (myResult !== officialResult) {
            console.log(`result is inconsistent for ${incrementer}`);
            clearInterval(functionValidator);
        }
    }
}, 250);
