// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2020',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };


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


// // 1.
// for (let [key, value] of game.scored.entries()) {
//     console.log(`Goal ${key+1}: ${value}`);
// }
//
// // 2.
// const odds = Object.values(game.odds)
// let avg = 0;
// for (let odd of odds) {
//     avg += odd;
// }
// avg /= odds.length;
// console.log(avg);
//
// console.log();
//
// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//     console.log(`Odd of ${teamStr}: ${odd}`);
// }
//
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
//
// // 4.
//
// const scorers = {};
// // for (let value of Object.values(game.scored)) {
// //     scorers[value] = !scorers?.[value] ?? 1;
// // }
// // console.log(scorers);
//
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);


// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);
//
// // 1.
// const events = new Set(gameEvents.values());
// console.log(events);
//
// // 2.
// console.log(gameEvents.delete(64));
// console.log(gameEvents);
//
// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(time);
//
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);
//
// // 4.
// for (const [key, value] of gameEvents) {
//     const half = key <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${key}: ${value}`);
// }


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
// const textAreaEl = document.querySelector('textarea');
// const btnEl = document.querySelector('button');
//
// textAreaEl.textContent = 'underscore_case\n' +
//     'first_name\n' +
//     'Some_Variable\n' +
//     'calculate_AGE\n' +
//     'delayed_departure'
//
// btnEl.addEventListener('click', function () {
//     const lstStr = textAreaEl.value.toLowerCase().trim().split('\n');
//     console.log(lstStr);
//
//     for (const [num, n] of lstStr.entries()) {
//         const [first, second] = n.split('_');
//         const word = first + second[0].toUpperCase() + second.slice(1);
//         console.log(word.padEnd(20, ' ') + '🆒'.repeat(num + 1));
//     }
// })


