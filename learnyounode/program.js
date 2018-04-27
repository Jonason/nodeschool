const fs = require('fs');
var mymodule = require('./mymodule.js')  

var file = process.argv[2]
var filterFileType = process.argv[3]

mymodule(file, filterFileType, handleFilteredList);

//filterDir(file, filterFileType);

function filterDir(file, filterFileType) {
    fs.readdir(file, handleFilteredList);

    
}

function handleFilteredList (err, list){
    if(err) return console.log(err);
    var res = list.filter(f => f.endsWith('.' + filterFileType));
    res.forEach(element => {
        console.log(element);
    });
}
