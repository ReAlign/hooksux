const fs = require('fs-extra');

const ROOT = `${__dirname}/../..`;
const copyPath = `${ROOT}/packages/hooksux/dist/react/src/react.d.ts`;
const copy2Path = `${ROOT}/packages/hooksux/dist/react.d.ts`;
const copyPathTypes = `${ROOT}/packages/hooksux/dist/react/src/types`;
const copy2PathTypes = `${ROOT}/packages/hooksux/dist/types`;
const removePath = `${ROOT}/packages/hooksux/dist/react`;

fs.copySync(copyPath, copy2Path);
console.log(`Copy '/dist/react/src/react.d.ts' to '/dist/react.d.ts' success.`);

fs.copySync(copyPathTypes, copy2PathTypes);
console.log(`Copy '/dist/react/src/types' to '/dist/types' success.`);

fs.removeSync(removePath);
console.log(`Remove '/dist/react' success.`);