const shell = require('shelljs');
const glob = require('glob');
const path = require('path');

const arg2 = process.argv[2];
const cwd = arg2;
const globPattern = process.argv[3];
const dist = process.argv[4];

const files = glob.sync(globPattern, {
    cwd,
    absolute: false
});

if (files.length) {
    shell.mkdir('-p', files.map(fP => `${dist}/${path.parse(fP).dir}`));

    files.forEach(fP => {
        shell.cp(fP, `${dist}/${fP}`);
    });
}