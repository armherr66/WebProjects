const calcTip = (bill) => {
    let tip;
    if (bill < 50 || bill > 300)
        tip = bill * 0.2;
    else
        tip = bill * 0.15;
    return tip;
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips);
console.log(totals);