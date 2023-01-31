const birthdayCakeCandles = (arr) => {
    // 1. Identify the tallest candles
    const tallestCandle = Math.max(...arr);

    // 2. Get the number of candles of that height
    let candlesSheCanBlow = 0;
    for (let i = 0; i < arr.length; i++) {
        if (tallestCandle === arr[i])
            candlesSheCanBlow++;
    }

    // 3. Return that number
    return candlesSheCanBlow;
}

console.log(birthdayCakeCandles([6, 6, 3, 5, 4, 6]));