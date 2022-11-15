const readline = require("readline-sync");
const nums = [];

for (let i = 0; i < 2; i++) {
    /**
     * @description Cara pertama
     */
    /* const input = readline.questionInt(`Input angka ke-${i + 1}: `); */
    /**
     * @description Cara kedua
     */
    // Prompt input
    const input = readline.question(`Input angka ke-${i + 1}: `);
    // Parse String ke Number
    const parsedInput = Number(input);
    if (isNaN(parsedInput)) {
        console.log("Invalid input, silahkan coba lagi");
        // Decrement variabel i untuk mengulang proses input
        --i;
        // Skip iteration / break
        continue;
    }

    // Push input yang sudah diconvert (parsed)
    nums.push(parsedInput);
}

// Jika input pertama kurang dari input kedua
if (nums[0] < nums[1]) {
    console.log(`${nums[0]} lebih kecil dari ${nums[1]}`);
// Jika input pertama sama dengan input kedua
} else if (nums[0] === nums[1]) {
    console.log(`${nums[0]} dan ${nums[1]} bernilai sama`);
// Jika kedua statement diatas tidak terpenuhi, maka jalankan... (input kedua kurang dari input pertama)
} else {
    console.log(`${nums[1]} lebih kecil dari ${nums[0]}`);
}
