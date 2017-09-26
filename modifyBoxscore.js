const fs = require('fs');

const path = './test_data/oct_28/';
const fileName01 = '11-43-42_basket_stats_live.json';

// open
const data = fs.readFileSync(path + fileName01);
const string = data.toString();
const json = JSON.parse(string);

// change

const boxscores = json.apiResults[0].league.season.eventType[0].events[0].boxscores;
boxscores[0].teamId = 23;
console.log(boxscores);

// write
fs.writeFileSync(path + fileName01, JSON.stringify(json));