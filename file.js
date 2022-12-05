const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./1/first.txt', 'utf8')
const second = readFileSync('./1/second.txt', 'utf8')

writeFileSync(
    './1/result.txt',
    `This is the result: ${first}, ${second}`,
    { flag: 'a' }
)

console.log('DOne with the task');
console.log('starting the next task');