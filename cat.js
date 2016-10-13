#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
function cat() {
    var pathFile = path.dirname(process.argv[1]) + "\\" + process.argv[2];
    if(path.dirname(process.argv[2])!='')
        pathFile=process.argv[2]
    fs.readFile(pathFile,function(err,data){
        if (err){
            process.stdout.write('no such file or directory')
            return
        }
        process.stdout.write(data.toString())

    })
}

cat()