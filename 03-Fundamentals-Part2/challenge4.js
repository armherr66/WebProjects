const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    let tip;
    if (bill < 50 || bill > 300)
        tip = bill * 0.2;
    else
        tip = bill * 0.15;
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);