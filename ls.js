#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
var util = require('util')
var statMode = require('stat-mode');
var dateFormat = require('dateformat');

function ls(rootName,rootPath, flagDeep) {
    fs.stat(rootPath, function (err, stats) {
        if (err) return
        var pathFile = path.dirname(rootPath)
        if (stats.isDirectory())
            pathFile = rootPath
        fs.readdir(pathFile, function (err, data) {
            if (err) {
                process.stdout.write('no such file or directory')
                return
            }
            data.forEach(function (file) {
                var nameFile =file.toString()
                var namePathFile=pathFile+'\\'+file.toString()
                fs.stat(namePathFile, function (err, stats) {
                    if (stats.isDirectory()) {
                        if (flagDeep == 1) {
                            ls(nameFile,namePathFile, flagDeep)
                        }
                        return;
                    }
                    if(rootName==='')
                        console.log(nameFile)
                    else
                        console.log(rootName+'\\'+nameFile)
                })
            })
            return
        })
    })


}

function main() {
    var flagDeep = process.argv[3] === '-R' ? 1 : 0
    if (process.argv[2] === 'undefine') {

    } else if (process.argv[2].indexOf('./')===0) {
        if (process.argv[2]==='./')
            ls('',process.argv[1], flagDeep)
        else {
            var subDir=process.argv[2].replace('./','')
            ls('',path.dirname(process.argv[1])+'\\'+subDir, flagDeep)
        }
    }
}

main()