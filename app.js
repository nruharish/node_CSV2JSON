const fs = require('fs');
const CSVReader = require('./csvreader.js');
const sourceFile = 'ind_niftynext50list.csv';
const targetFile = 'ind_niftynext50list.json';

const convert2JSON = (jsonObject) => {
  console.log(JSON.stringify(jsonObject));
  fs.writeFile(targetFile, JSON.stringify(jsonObject), () => {
    console.log('Converted ..');
  });
};

CSVReader.readCSV(sourceFile, convert2JSON);
