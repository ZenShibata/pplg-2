// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// display variable use console.log
console.log(z);

// javascript literals
// literal biasanya disebut fixed value
// contoh dari penggunaan fixed value dibawah ini
// Ex. Number
console.log(12345678);
// Ex. String / text
console.log('Kelas X PPLG 2');

// membuat variable bisa menggunakan 3 keyword
// 1. let
// 2. var
// 3. const
// apa bedanya?? diantara ketiga itu??

// Ex. let
let a, b;
a = 5 + 6
b = a * 10;
console.log('contoh penggunaan let');
console.log('Ini nilai dari variable a : ' + a);
console.log('Ini nilai dari variable b : ' + b);

// Ex. var
let c, d;
c = 5 + 6
d = c * 10;
console.log('contoh penggunaan var');
console.log('Ini nilai dari variable c : ' + c);
console.log('Ini nilai dari variable d : ' + d);

// Ex. const
const e = 5 + 6;
const f = e * 10;

console.log('contoh penggunaan const');
console.log('Ini nilai dari variable e : ' + e);
console.log('Ini nilai dari variable f : ' + f);

// Ex. nothing
const g = 5 + 6;
const h = g * 10;

console.log('contoh penggunaan nothing');
console.log('Ini nilai dari variable g : ' + g);
console.log('Ini nilai dari variable h : ' + h);

// Conclusion let & var sana cara penggunaannya
// kita bisa menggunakan nilai dari variable
// tetapi jika kita menggunakan const itu harus langsung diberikan nilai/value
// karena const nilainya tidak bisa diubah / fixed

// ex. Case Sensitive
let lastname, lastName;
lastname = 'Bay U';
lastName = 'Bayu';

console.log(lastname);
console.log(lastName);