const fs = require('fs');
const package = require('../package.json');

const homepage = process.env.REACT_APP_HOMEPAGE || package.homepage;
const domain = homepage.replace('https://', '');
fs.writeFileSync('./public/CNAME', domain); 