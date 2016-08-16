#!/usr/bin/env node

"use strict";

console.log('Shit it.');
console.log('I am now in ', __dirname);
console.log('current command directory is: ', process.cwd());

var templates = require('./templates.js');

if (process.argv.length > 2) {
    var command = process.argv[2];

    if (command === 'template' || 't') {
        var options = process.argv[3];

        switch (options) {
            case 'list':
                templates.list();
                break;

            default:
                templates.copy(options, process.argv[4] || process.cwd() + '/' + options);
                break;
        }
    }
}