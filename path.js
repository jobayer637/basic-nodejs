const path = require('path')

console.log(path.extname(__filename))

var myDir = {
    root : '/',
    name : 'mylogo',
    ext : '.js',
}

console.log(path.format(myDir))