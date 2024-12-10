const fs = require('fs');
const path = require('path');

const env = process.argv[2];
const packagePath = path.join(__dirname, '..', 'package.json');

// Read the package.json
const package = require(packagePath);

// Set homepage based on environment
if (env === 'prod') {
    package.homepage = 'https://mbajaman.dev';
} else if (env === 'staging') {
    package.homepage = 'https://staging.mbajaman.dev';
}

// Write back to package.json
fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));

// Set environment variable for CNAME script
process.env.REACT_APP_HOMEPAGE = package.homepage; 