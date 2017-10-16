const fs = require('fs');
const path = '.\\test_data\\basketball\\daum\\';
const fileNameList = [
  'daum_json.json',
  'daum_kbl_game2.json',
  'daum_kbl_game3.json',
  'kbl_game4.json',
  'kbl_game5.json',
  'kbl_game6.json',
]

// console.log(json);
const printPerson = (teamName) => (person) => console.log('%s,%s,%s,%s,%s,%s',teamName, person.nameMain, person.personId, person.cpPersonId, person.positionName, person.backNumber);

const printData = (filePathName) => homeName => awayName =>{
  const data = fs.readFileSync(filePathName);
  const string = data.toString();
  const json = JSON.parse(string);

  let homePersons = json.homePerson;
  let awayPersons = json.awayPerson;

  homePersons.forEach(person => {
    printPerson(homeName)(person);
  });
  awayPersons.forEach(person => {
    printPerson(awayName)(person);
  });
}

// gameId = 8008133
// daum lineup page: http://sports.media.daum.net/sports/gamecenter/80008133/highlight
// daum api url: http://score.sports.media.daum.net/hermes/api/game/get.json?gameId=80008133&detail=liveData&dummy=pull_mode_started_150796992&callback=seulgiCallback
printData(path + fileNameList[0])('안양')('삼성');
printData(path + fileNameList[1])('고양')('창원');
printData(path + fileNameList[2])('울산모비스')('부산KT');
printData(path + fileNameList[3])('인천전자랜드')('안양KGC');
printData(path + fileNameList[4])('원주DB')('전주KCC');
printData(path + fileNameList[5])('서울SK')('고양오리온');

