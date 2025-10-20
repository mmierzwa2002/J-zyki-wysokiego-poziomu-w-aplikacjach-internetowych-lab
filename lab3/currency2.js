let Currency = function() {
    this.zlotyRates = {
        USD: 3.64,
        GBP: 4.88,
        EUR: 4.24,
        RUB: 0.045,
        INR: 0.041
    };
};

Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
};

Currency.prototype.zlotyToUSD = function(zloty) {
    return this.roundTwoDecimals(zloty / this.zlotyRates.USD);
}
Currency.prototype.USDToZloty = function(usd) {
    return this.roundTwoDecimals(usd * this.zlotyRates.USD);
}

Currency.prototype.zlotyToGBP = function(zloty) {
    return this.roundTwoDecimals(zloty / this.zlotyRates.GBP);
}
Currency.prototype.GBPToZloty = function(gbp) {
    return this.roundTwoDecimals(gbp * this.zlotyRates.GBP);
}

Currency.prototype.zlotyToEUR = function(zloty) {
    return this.roundTwoDecimals(zloty / this.zlotyRates.EUR);
}
Currency.prototype.EURToZloty = function(eur) {
    return this.roundTwoDecimals(eur * this.zlotyRates.EUR);
}

Currency.prototype.zlotyToRUB = function(zloty) {
    return this.roundTwoDecimals(zloty / this.zlotyRates.RUB);
}
Currency.prototype.RUBToZloty = function(rub) {
    return this.roundTwoDecimals(rub * this.zlotyRates.RUB);
}

Currency.prototype.zlotyToINR = function(zloty) {
    return this.roundTwoDecimals(zloty / this.zlotyRates.INR);
}
Currency.prototype.INRToZloty = function(inr) {
    return this.roundTwoDecimals(inr * this.zlotyRates.INR);
}

module.exports = exports = Currency;