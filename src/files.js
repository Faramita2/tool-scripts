const exec = require('child_process').exec;
const fs = require('fs');

// command line params
const repo = process.argv[2]
const authors = process.argv[3].split(',').map((author) => `--author="${author}"`).join(' ')

const tmp = '/tmp/tmp.txt'
const cmd = `cd ${repo} && git log --pretty="format:" --name-only --after="2021-01-01" ${authors} > ${tmp}`;

console.log(`\nRun command: ${cmd}\n`);
exec(cmd, function (error, stdout, stderr) {
    if (error !== null) {
         console.log('exec error: ' + error);
         console.log('stdout: ' + stdout);
         console.log('stderr: ' + stderr);
    }
});

const filenameText = fs.readFileSync(tmp, "utf8");
const counter = [];
const set = new Set();

for (const filename of filenameText.split('\n')) {
    if (filename.match(/.+WEB-.+\.js$/)) {
        counter.push(filename);
        if (!set.has(filename)) set.add(filename);
    }
}

console.log(`Test Script Commit Count: ${counter.length}, Test Script Count: ${set.size}`);
