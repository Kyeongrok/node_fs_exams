const fs = require('fs');

const getFileJson = (path, fileName) =>{
  const data = fs.readFileSync(path + fileName);
  const string = data.toString();
  const json = JSON.parse(string);
  return json;
}

module.exports.getFileJson = getFileJson;