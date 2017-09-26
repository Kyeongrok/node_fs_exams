const fs = require('fs');
const fileNamelistGetter = require('./fileNameListGetter');
const printChilds = require('./printChilds');
const path = './test_data/oct_28/';
const fileName01 = '11-43-42_basket_stats_live.json';

const fileNameList = fileNamelistGetter.getFileNameList(path);

// open
const data = fs.readFileSync(path + fileNameList[0]);
const string = data.toString();
const json = JSON.parse(string);

// change
const event = json.apiResults[0].league.season.eventType[0].events[0];
const boxscores = event.boxscores;
console.log(boxscores[0].playerStats);

printChilds.printPlayerstats(json);

// write
// fs.writeFileSync(path + fileName01, JSON.stringify(json));