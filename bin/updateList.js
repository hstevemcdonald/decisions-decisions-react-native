const fs = require('fs');
const _ = require('lodash');

const listFile = './data/list.txt';
const jsonListFile = './list.json';

const listData = fs.readFileSync(listFile, 'utf8');
const splitData = listData.split('\n');

fs.writeFileSync(jsonListFile, JSON.stringify(splitData.filter(item => !_.isEmpty(item))));


