const readline = require("readline-sync");
const input = [readline.questionInt("Masukkan luas persegi panjang: "), readline.questionInt("Masukkan panjang persegi panjang: ")];
console.log(`Luas persegi panjang: ${input.reduce((a,b) => a*b)}`);