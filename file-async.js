const { readFile, writeFile} = require('fs');
console.log('start')

readFile('./1/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./1/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './1/result-async.txt',
            `Here is the result ${first}, ${second}`,
            (err, result)=> {
                if(err) {
                    console.log(err)
                    return
                }
                //console.log(result)
                console.log('Done with this task')
            }
        )
    })
})
console.log('starting the next task')