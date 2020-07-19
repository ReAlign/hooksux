const fs = require('fs-extra');

fs.copySync(`${__dirname}/../src`, `${__dirname}/src`);

console.log(`Copy '../src' to 'rax/src' success.`);