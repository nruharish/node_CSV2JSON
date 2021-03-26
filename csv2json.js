const readline = require('readline');
const fs = require('fs');
const inStream = fs.createReadStream('ind_niftynext50list.csv');

const rl = readline.createInterface({ input: inStream });

let lineNum = 0;
let csvHeader = [];
let csvData = [];
let jsonData = [];
rl.on('line', (data) => {
  //First line
  if (lineNum == 0) {
    csvHeader = data.split(',');
  } else {
    csvData = data.split(',');
  }
  if (csvData.length == csvHeader.length) {
    var jsonVariable = {};
    for (i = 0; i < csvData.length; i++) {
      jsonVariable[csvHeader[i]] = csvData[i];
    }
    if (lineNum) jsonData.push(jsonVariable);
  }
  lineNum++;
});

const convert2JSON = () => {
  console.log(JSON.stringify(jsonData));
  fs.writeFile('ind_niftynext50list.json', JSON.stringify(jsonData), () => {
    console.log('Converted ..');
  });
};

rl.on('close', () => convert2JSON());
