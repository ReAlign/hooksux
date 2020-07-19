const fs = require('fs-extra');

fs.removeSync(`${__dirname}/src`);

console.log(`Remove 'rax/src' success.`);