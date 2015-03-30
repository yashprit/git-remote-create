'use strict';
var request = require('request');
var querystring = require('querystring');

function createRepo(token, reponame, cb) {

  var url = 'https://api.github.com/user/repos';

  var data = {
    "name": reponame
  }

  var options = {
    uri: url,
    method: 'POST',
    headers: {
      'User-Agent': 'git-remote-create',
      'Authorization': 'token ' + token
    },
    json: data
  };

  request(options, function(err, response, body) {
    if (err) {
      cb(err);
      return;
    }

    if (!err && response.statusCode == 201) {
      cb(null, body);
    } else {
      cb(body.message);
    }
  });
}

module.exports = createRepo;
