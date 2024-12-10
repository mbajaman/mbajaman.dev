const fs = require('fs');
const domain = process.env.REACT_APP_HOMEPAGE ? 
  process.env.REACT_APP_HOMEPAGE.replace('https://', '') : 
  'mbajaman.dev';
fs.writeFileSync('./public/CNAME', domain); 