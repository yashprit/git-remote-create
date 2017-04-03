'use strict';
var request = require('request');

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
    if (err) return cb(err);

    if (response && response.statusCode == 201) {
      cb(null, body);
    } else {
      cb(body.message);
    }
  });
}

module.exports = createRepo;
