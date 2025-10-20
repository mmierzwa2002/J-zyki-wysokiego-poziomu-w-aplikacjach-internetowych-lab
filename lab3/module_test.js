// Referencja do obiektu export
const currency1 = require('./currency1');
// Podejście obiektowe
const Currency = require('./currency2');
const currency2 = new Currency();

// Test wersji referencji do obiektu export
console.log('50 dolarów odpowiada następującej ilości Polskich Złotych:');
console.log(currency1.USDToZloty(50));

// Test wersji obiektowej
console.log('1000 Polskich Złotych odpowiada następującej ilości Rupli Indyjskich:');
console.log(currency2.zlotyToINR(1000));