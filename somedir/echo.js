#!/usr/bin/env node

require('./help')
var fs = require('fs').promise

function echo() {
    // Use 'await' in here
    // Your implementation here
    //console.log(await fs.readFile(__filename, console.log))
    if (process.argv[2]!='undefined')
        process.stdout.write(process.argv[2])
}

echo()
