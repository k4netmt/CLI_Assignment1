#!/usr/bin/env node
require('./help')

var fs = require('fs')
var path = require('path')
var util = require('util')
var statMode = require('stat-mode');
var dateFormat = require('dateformat');

function mkdir(rootPath) {
    var flag=fs.existsSync(rootPath)
    if (flag==true)
        return
    else{
        fs.mkdirSync(rootPath)
    }
}

function main() {
    if (process.argv[2]==='undefine')
        return
    if (process.argv[2]==='./')
        return
    if (process.argv[2].indexOf('./')===0){
        var linkSub=process.argv[2].substr(2,process.argv[2].length)
        var subs=linkSub.split('/')
        linkSub=path.dirname(process.argv[1])
        for(var i=0;i<subs.length;i++){
            linkSub=linkSub+'\\'+subs[i]
            mkdir(linkSub)
        }
    }
}

main()