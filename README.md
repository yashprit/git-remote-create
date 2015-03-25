# git-remote-create [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> create remote github repository, using node


## Install

```sh
$ npm install --save git-remote-create
```


## Usage

### JavaScript

```js
var gitRemoteCreate = require('git-remote-create');
gitRemoteCreate([token],[reponame], cb);
```

### Command Line reference

```sh
$ npm install --global git-remote-create
$ git-remote-create --t {token} --r "sample"
# => this will create repo with name sample
```

## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].


## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/git-remote-create/issues
[npm-url]: https://npmjs.org/package/git-remote-create
[npm-image]: https://badge.fury.io/js/git-remote-create.svg
[travis-url]: https://travis-ci.org/yashprit/git-remote-create
[travis-image]: https://travis-ci.org/yashprit/git-remote-create.svg?branch=master
