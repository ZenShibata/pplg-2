// Banner things
import gradient from "gradient-string";
import { createBanner } from "@skyra/start-banner";
// Import library readline-sync
import readline from "readline-sync";

console.log(
    gradient.vice.multiline(
        createBanner({
            logo: [
                String.raw`       __`,
                String.raw`    __╱‾‾╲__`,
                String.raw` __╱‾‾╲__╱‾‾╲__`,
                String.raw`╱‾‾╲__╱  ╲__╱‾‾╲`,
                String.raw`╲__╱  ╲__╱  ╲__╱`,
                String.raw`   ╲__╱  ╲__╱`,
                String.raw`      ╲__╱`,
                ""
            ],
            name: [
                String.raw`██╗░░██╗░█████╗░██╗░░░░░██╗░░██╗██╗░░░██╗██╗░░░░░░█████╗░████████╗░█████╗░██████╗░`,
                String.raw`██║░██╔╝██╔══██╗██║░░░░░██║░██╔╝██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗`,
                String.raw`█████═╝░███████║██║░░░░░█████═╝░██║░░░██║██║░░░░░███████║░░░██║░░░██║░░██║██████╔╝`,
                String.raw`██╔═██╗░██╔══██║██║░░░░░██╔═██╗░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║░░██║██╔══██╗`,
                String.raw`██║░╚██╗██║░░██║███████╗██║░╚██╗╚██████╔╝███████╗██║░░██║░░░██║░░░╚█████╔╝██║░░██║`,
                String.raw`╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝`
            ],
            extra: [
                `Calculator: v1.0.0`
            ]
        })
    )
);

// Array berisi operasi aljabar yang valid
const validOperator = ["+", "-", "/", "*", "%"];

/**
 * @description Tanyakan operasi yang diinginkan ke user
 * validOperator.join(", ") untuk menggabungkan semua element di array menjadi string.
 * Contohnya: +, -, /, *
 */
const operator = readline.question(`Input operator (${validOperator.join(", ")}): `, {
    // Beri opsi untuk validasi input dari user sehingga operasi aljabar sesuai
    limit: validOperator,
    // Beri opsi untuk error jika validasi gagal
    limitMessage: `Invalid operator provided. Valid ones are: ${validOperator.join(", ")}`
}).trim(); // Trim untuk menghilangkan spasi di depan dan di belakang. Contoh " a " -> "a"

// Array berisi input pertama dan input kedua berupa number/integer
// [input pertama, input kedua]
const numbers = [readline.questionInt("Input first number: "), readline.questionInt("Input second number: ")];

// Initialisasi variabel kosong untuk hasil di akhir
let result;

// Gunakan switch untuk pengkondisian bercabang
switch (operator) {
    // Case pertama: penjumlahan
    case validOperator[0]:
        // Jumlahkah indeks pertama dan kedua
        result = numbers[0] + numbers[1];
        // Break untuk mengakhiri kondisi switch case
        break;
    // Case kedua: pengurangan
    case validOperator[1]:
        // Kurangi indeks pertama dan kedua
        result = numbers[0] - numbers[1];
        // Break untuk mengakhiri kondisi switch case
        break;
    // Case ketiga: pembagian
    case validOperator[2]:
        // Bagi indeks pertama dan kedua
        result = numbers[0] / numbers[1];
        // Break untuk mengakhiri kondisi switch case
        break;
    // Case keempat: perkalian
    case validOperator[3]:
        // Kali indeks pertama dan kedua
        result = numbers[0] * numbers[1];
        // Break untuk mengakhiri kondisi switch case
        break;
    // Case kelima: modulus
    case validOperator[4]:
        // Modulo indeks pertama dan kedua
        result = numbers[0] % numbers[1];
        // Break untuk mengakhiri kondisi switch case
        break;
}

// Print hasil operasi ke console
console.log(`Hasil: ${result}`);