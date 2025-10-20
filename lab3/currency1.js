let zlotyDolar = 3.64;
let zlotyFunt = 4.88;
let zlotyEuro = 4.24;
let zlotyRuble = 0.045;
let zlotyRupia = 0.041;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.zlotyToUSD = function(zloty) {
    return roundTwoDecimals(zloty / zlotyDolar);
}
exports.USDToZloty = function(usd) {
    return roundTwoDecimals(usd * zlotyDolar);
}

exports.zlotyToGBP = function(zloty) {
    return roundTwoDecimals(zloty / zlotyFunt);
}
exports.GBPToZloty = function(gbp) {
    return roundTwoDecimals(gbp * zlotyFunt);
}

exports.zlotyToEUR = function(zloty) {
    return roundTwoDecimals(zloty / zlotyEuro);
}
exports.EURToZloty = function(eur) {
    return roundTwoDecimals(eur * zlotyEuro);
}

exports.zlotyToRUB = function(zloty) {
    return roundTwoDecimals(zloty / zlotyRuble);
}
exports.RUBToZloty = function(rub) {
    return roundTwoDecimals(rub * zlotyRuble);
}

exports.zlotyToINR = function(zloty) {
    return roundTwoDecimals(zloty / zlotyRupia);
}
exports.INRToZloty = function(inr) {
    return roundTwoDecimals(inr * zlotyRupia);
}
