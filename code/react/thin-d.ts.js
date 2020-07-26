const fs = require('fs-extra');

const ROOT = `${__dirname}/../..`;
const copyPath = `${ROOT}/packages/hooksux/dist/react/src/react.d.ts`;
const copy2Path = `${ROOT}/packages/hooksux/dist/react.d.ts`;
const removePath = `${ROOT}/packages/hooksux/dist/react`;

fs.copySync(copyPath, copy2Path);
console.log(`Copy '/dist/react/src/react.d.ts' to '/dist/react.d.ts' success.`);

fs.removeSync(removePath);
console.log(`Remove '/dist/react' success.`);