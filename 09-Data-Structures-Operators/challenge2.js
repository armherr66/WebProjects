///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern',
    team2: 'Borrusia',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 19th, 2021',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    printGoals: function (...playerNames) {
        for (let i = 0; i < playerNames.length; i++) {
            let totalGoalsPlayer = 0;
            for (let j = 0; j < this.scored.length; j++)
                if (playerNames[i] === this.scored[j]) totalGoalsPlayer++;
            console.log(`${playerNames[i]} scored ${totalGoalsPlayer} goals`);
        }
    }
};

// 1.
for (const [i, player] of game.scored.entries()) {
    // console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
    sum += odd;
}
console.log(`Average odd: ${sum / odds.length}`);

// 3.
for ([team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS.
const scores = {};
for (const player of game.scored) {
    if (scores[player])
        scores[player]++;
    else {
        scores[player] = 1;
    }
}
console.log(scores);