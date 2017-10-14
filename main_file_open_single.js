const fs = require('fs');
const path = '.\\';
const fileNameList = [
  'daum_json.json',
  'daum_kbl_game2.json'
]

// console.log(json);
const printPerson = (teamName) => (person) => console.log('%s,%s,%s,%s,%s,%s',teamName, person.nameMain, person.personId, person.cpPersonId, person.positionName, person.backNumber);

const printData = (filePathName) => homeName => awayName =>{
  const data = fs.readFileSync(path + 'daum_json.json');
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

printData(path + fileNameList[0])('안양')('삼성');
printData(path + fileNameList[1])('고양')('창원');
