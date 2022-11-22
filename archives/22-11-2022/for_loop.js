const { createInterface } = require("readline/promises");

const readline = createInterface(process.stdin, process.stdout);

(async () => {
    const range = Number(await readline.question("Input range: "));

    if (isNaN(range)) {
        throw new TypeError("Please input a valid number");
    }

    if (range <= 0) {
        throw new RangeError("Please input a valid number above 0");
    }

    console.log(`Berikut adalah bilangan genap dari 0 - ${range}`);
    for (let i = 0; i <= range; i++) {
        if (i % 2 === 0) console.log(i);
    }

    readline.close();
})().catch(console.error);