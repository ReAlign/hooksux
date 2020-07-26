const fs = require('fs-extra');

const ROOT = `${__dirname}/../..`;
const copyPath = `${ROOT}/packages/hooksux-rax/dist/rax/src/rax.d.ts`;
const copy2Path = `${ROOT}/packages/hooksux-rax/dist/rax.d.ts`;
const copyPathTypes = `${ROOT}/packages/hooksux-rax/dist/rax/src/types`;
const copy2PathTypes = `${ROOT}/packages/hooksux-rax/dist/types`;
const removePath = `${ROOT}/packages/hooksux-rax/dist/rax`;

fs.copySync(copyPath, copy2Path);
console.log(`Copy '/dist/rax/src/rax.d.ts' to '/dist/rax.d.ts' success.`);

fs.copySync(copyPathTypes, copy2PathTypes);
console.log(`Copy '/dist/rax/src/types' to '/dist/types' success.`);

fs.removeSync(removePath);
console.log(`Remove '/dist/rax' success.`);