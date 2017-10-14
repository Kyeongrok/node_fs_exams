const fs = require('fs');
const fileNamelistGetter = require('./fileNameListGetter');
const printChilds = require('./printChilds');
const path = './test_data/oct_28/';
const path2 = './test_data/boxscore/';
const path3 = './test_data/schedule/';
const fileName01 = '11-43-42_basket_stats_live.json';

const fileNameList = fileNamelistGetter.getFileNameList(path3);

// open
const data = fs.readFileSync(path3 + fileNameList[0]);
const string = data.toString();
const json = JSON.parse(string);

// change
const event = json.apiResults[0].league.season.eventType[0].events[0];
// const boxscores = event.boxscores;
// console.log(boxscores[0].playerStats);

// printChilds.printPlayerstats(json);

console.log(json.apiResults[0].league.season.eventType[0]);

// write
// fs.writeFileSync(path + fileNameList[0], JSON.stringify(json));