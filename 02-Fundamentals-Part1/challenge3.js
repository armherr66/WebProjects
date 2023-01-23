var bills = [124, 48, 268];

function calcuateTips(bills) {
    var tips = [];
    var totals = [];

    for (let i = 0; i < bills.length; i++) {
        switch (true) {
            case bills[i] < 50:
                tips[i] = bills[i] * 0.2;
                break;
            case bills[i] >= 50 && bills[i] < 200:
                tips[i] = bills[i] * 0.15;
                break;
            default:
                tips[i] = bills[i] * 0.10;
                break;
        }
    }

    for (let i = 0; i < tips.length; i++) {
        totals[i] = tips[i] + bills[i];
    }

    console.log(tips);
    console.log(totals);
}

calcuateTips(bills);