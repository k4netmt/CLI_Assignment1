#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
function touch() {
    var pathFile = path.dirname(process.argv[1]) + "\\" + process.argv[2];
    //if(path.dirname(process.argv[1])!='')
    //    pathFile=process.argv[2]
    pathFile = path.dirname(process.argv[1])
    fs.readdir(pathFile, function (err, data) {
        if (err) {
            process.stdout.write('no such file or directory')
            return
        }
        data.forEach(function (nameFile) {
            fs.stat(nameFile.toString(), function (err, stats) {
                //var content=fs.fsyncSync(pathFile1)
                console.log(stats.mode + '\t' + stats.mtime)
                console.log('\n')
            });
        })


    })
}

touch()