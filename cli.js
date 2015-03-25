#!/usr/bin/env node

'use strict';
var argv = require('minimist')(process.argv.slice(2));
var gitRemoteCreate = require('./');

gitRemoteCreate(argv.t, argv.r, function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
})
