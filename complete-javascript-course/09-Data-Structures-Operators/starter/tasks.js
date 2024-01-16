const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
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
            'Lewandowski',
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
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2020',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// // 1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);
//
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
//
// // 3.
// const allPLayers = [...players1, ...players2];
// // console.log(allPLayers);
//
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutiho', 'Periscic'];
// console.log(players1Final);
//
// // 5.
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);
//
// // 6.
// const printGoals = function (...players) {
//     console.log(players);
//     console.log(`${players.length} goals were scored`);
// };
//
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
//
// // 7.
//
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


// 1.
for (let [key, value] of game.scored.entries()) {
    console.log(`Goal ${key+1}: ${value}`);
}

// 2.
const odds = Object.values(game.odds)
let avg = 0;
for (let odd of odds) {
    avg += odd;
}
avg /= odds.length;
console.log(avg);

console.log();

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// 4.

const scorers = {};
// for (let value of Object.values(game.scored)) {
//     scorers[value] = !scorers?.[value] ?? 1;
// }
// console.log(scorers);

for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
