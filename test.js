var fs = require('fs')
var b = process.cwd();
var path = require('path')
if (fs.existsSync(path.join(b,'./clrdos.json'))) {
    // Do something
    console.log('tem')
    var getSaved = require('./clrdos.json');
}else{
    console.log('naotem')
    write([],'./clrdos.json');
}