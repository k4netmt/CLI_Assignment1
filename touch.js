#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
var util=require('util')
var statMode = require('stat-mode');
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
        data.forEach(function (file) {
            var nameFile=file.toString()
            fs.stat(nameFile.toString(),function(err,stats){
                if (err) return;
                var mode=new statMode(stats)
                console.log(mode.toString())
            })
        })


    })
}

touch()