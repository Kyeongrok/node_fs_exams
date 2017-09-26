const printChilds = require('../printChilds');
const openFile = require('../openFile');

const path = '../test_data/oct_28/';
const fileName01 = '11-43-42_basket_stats_live.json';

const json = openFile.getFileJson(path, fileName01);



// printChilds.printBoxscore(json);
printChilds.printPlayerstats(json);


