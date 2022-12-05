const os = require('os')

const user = os.userInfo()
console.log(user)

//method that returns system uptime
console.log(`The system has been up for ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);