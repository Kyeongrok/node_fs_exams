const fs = require('fs');
const fileNamelistGetter = require('./fileNameListGetter');
const printChilds = require('./printChilds');
const openFile = require('./openFile');

const path = './test_data/oct_28/';
const fileName01 = '11-43-42_basket_stats_live.json';

const fileNameList = fileNamelistGetter.getFileNameList(path);
console.log(fileNameList.length);

let beforeResult = '';

fileNameList.forEach(fileName => {
  try {
    console.log(fileName);
    const json = openFile.getFileJson(path, fileName);
    // printChilds.printEventStatus(json);
    const result = printChilds.printMinuteSeconds(json);
    console.log(result);

  } catch (e) {
  }
});


// printChilds.printBoxscore(json);
// printChilds.printPlayerstats(json);
// printChilds.printEventStatus(json);