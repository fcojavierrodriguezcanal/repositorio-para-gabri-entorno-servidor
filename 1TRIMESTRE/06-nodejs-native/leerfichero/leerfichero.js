const fs = require('fs')
const archivo=process.argv[2];
try {
const data = fs.readFileSync(archivo, 'utf8')
console.log(data)
} catch (err) {
console.error(err)
} 