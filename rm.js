#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
var util = require('util')
var statMode = require('stat-mode');
var dateFormat = require('dateformat');

function removeFolder(pathCurrent) {
    var flag = fs.existsSync(pathCurrent)
    if (flag) {
        if (fs.existsSync(pathCurrent)) {
            fs.stat(pathCurrent,function (err,stats) {
                if(stats.isDirectory()){
                    fs.readdirSync(pathCurrent).forEach(function (file, index) {
                        var curPath = pathCurrent + "\\" + file;
                        if (fs.lstatSync(curPath).isDirectory()) { // recurse
                            removeFolder(curPath);
                        } else { // delete file
                            fs.unlinkSync(curPath);
                        }
                    });
                    fs.rmdirSync(pathCurrent);
                }else{
                    fs.unlinkSync(pathCurrent);
                }
            })
        }
    }
}

function main() {
    var firstArgv = process.argv[1]
    var secondArgv = process.argv[2]
    if (secondArgv === './' || secondArgv === 'undefine')
        return
    if (secondArgv.indexOf('./') === 0) {
        var subPath = secondArgv.substr(2, secondArgv.length)
        subPath=subPath.replace('/','\\')
        var fullPath = path.dirname(firstArgv) + '\\' + subPath
        removeFolder(fullPath)
    }
}

main()