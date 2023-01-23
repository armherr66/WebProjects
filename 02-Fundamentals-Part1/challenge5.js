var tipCalculator = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calculateTip: function () {
        for (let i = 0; i < this.bills.length; i++) {
            switch (true) {
                case this.bills[i] < 50:
                    this.tips[i] = this.bills[i] * 0.2;
                    break;
                case this.bills[i] >= 50 && this.bills[i] < 200:
                    this.tips[i] = this.bills[i] * 0.15;
                    break;
                default:
                    this.tips[i] = this.bills[i] * 0.10;
                    break;
            }
        }

        for (let i = 0; i < this.tips.length; i++) {
            this.totals[i] = this.tips[i] + this.bills[i];
        }
    }
}

tipCalculator.calculateTip();
console.log(tipCalculator.tips);
console.log(tipCalculator.totals);