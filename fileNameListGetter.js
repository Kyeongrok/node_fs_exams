const testFolder = './test_data/oct_28/';
const fs = require('fs');
const pathBoxscore = './test_data/boxscore/';
const fileName02 = '2017-03-02olnw.json';

const printContents = (json) =>{
  const event = json.apiResults[0].league.season.eventType[0].events[0];
  const boxscores = event.boxscores;
  console.log('%s vs %s', event.teams[0].score, event.teams[1].score);

  if(Number.isNaN(event.teams[0].score)){
    console.log(event.teams[0]);
  }
}

const makeFile = (callback) => fs.readdirSync(testFolder).forEach((fileName) => {
  console.log(fileName);
  const data = fs.readFileSync(testFolder + `${fileName}`);
  const string = data.toString();
  try {
    const json = JSON.parse(string);
    printContents(json);

  } catch (e) {
    console.log(e);
  }
});

const writeFile = (fileName, str) =>{
  fs.writeFileSync(testFolder + './boxscore_add/' + fileName, str);
}

const getFileNameList = (path) => {
  const list = [];
  fs.readdirSync(path).forEach(fileName => list.push(fileName));
  return list;
}

module.exports.getFileNameList = getFileNameList;