//console.log(process.argv)
var fs = require('fs')

var dir = process.argv[2];
var endsWith = process.argv[3];

printListOfFiles(dir, endsWith);

function printListOfFiles(dir, fileEndWith) {
    fs.readdir(dir, callback)

    function callback(err, list) {
        if(err) 
            return;
        
        for(var i = 0; i < list.length)
    }
}

function countLines(file) {
    fs.readFile(file, 'utf8', callback);

    function callback(err, data) {
        if(err)
            return;
        var lines = data.split('\n').length - 1;
        console.log(lines);
    }
}

function countLinesSync(file) {
    var buff = fs.readFileSync(file);
    return buff.toString().split('\n').length - 1;
}

function sumArgs() {
    var sum = 0;
    if(process.argv.length > 1) {
        for(var i = 2; i < process.argv.length; ++i){   
            sum += Number(process.argv[i]);
        }  
    }
    return sum;
}

