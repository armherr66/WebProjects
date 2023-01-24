const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const announceWinner = (team, avgScoreWinner, avgScoreLoser) => {
    console.log(`${team} win (${avgScoreWinner} vs. ${avgScoreLoser})`);
}

const checkWinner = (d1, d2, d3, k1, k2, k3) => {
    const avgD = calcAverage(d1, d2, d3);
    const avgK = calcAverage(k1, k2, k3);

    if (avgD >= avgK * 2) {
        announceWinner('Dolphins', avgD, avgK);
    }
    else if (avgK >= avgD * 2) {
        announceWinner('Koalas', avgK, avgD);
    }
    else {
        console.log("No one wins!");
    }
}

checkWinner(44, 23, 71, 65, 54, 49);
checkWinner(85, 54, 41, 23, 34, 27);