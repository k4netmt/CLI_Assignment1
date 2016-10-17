#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
var util = require('util')
var statMode = require('stat-mode');
var dateFormat = require('dateformat');

function cat(keyWord, pathFile,tempFile,flagFolder) {
    fs.readFile(pathFile, function (err, data) {
        if (err) {
            process.stdout.write('no such file or directory')
            return
        }
        var lines = data.toString().split('\n')
        lines.forEach(function (line) {
            if (line.indexOf(keyWord)>=0) {
                if(flagFolder==1){
                    process.stdout.write(tempFile + ': ')
                }
                process.stdout.write(line.toString()+'\n')
            }
        })
    })
}

function main() {
    if (process.argv.length!=4)
        return
    var keyWord = process.argv[2]
    var flagFolder=0
    if (process.argv[3].indexOf('./') === 0) {

    } else {
        var rootPath = path.dirname(process.argv[1]) + '\\' + process.argv[3]
        fs.stat(rootPath, function (err, stats) {
            if (stats.isDirectory()) {
                flagFolder=1
                fs.readdir(rootPath, function (err, data) {
                    if (err) {
                        process.stdout.write('no such file or directory')
                        return
                    }

                    data.forEach(function (file) {
                        var nameFile = rootPath + '\\' + file.toString()
                        var tempFile=process.argv[3]
                        fs.stat(nameFile.toString(), function (err, stats) {
                            if (err) return;
                            if (!stats.isDirectory()) {
                                cat(keyWord,nameFile,tempFile+'\\'+file,flagFolder)
                            }
                        })
                    })
                })
            } else {
                cat(keyWord, rootPath,'',flagFolder)
            }
        })
    }
}

main()