
# read-dir-recur
[![package version](https://img.shields.io/npm/v/read-dir-recur.svg?style=flat-square)](https://npmjs.org/package/read-dir-recur)
[![package downloads](https://img.shields.io/npm/dm/read-dir-recur.svg?style=flat-square)](https://npmjs.org/package/read-dir-recur)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/read-dir-recur.svg?style=flat-square)](https://npmjs.org/package/read-dir-recur)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Recursively read directories

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install read-dir-recur
$ # OR
$ yarn add read-dir-recur
```

## Usage


When reading `dir` with this structure:

```
bar/
├── baaa
├── baz.js
├── ping.js
└── pong.md
```

```js
const readDirRecur = require('read-dir-recur')

console.log(readDirRecur({ readFile: false, pattern: '*.js', ignore: ['baaa'], base: ROOT_DIR }))
//  { bar:
//        [ { base: 'bar', name: 'baz.js', ext: '.js', size: 0 },
//          { base: 'bar', name: 'ping.js', ext: '.js', size: 0 } ] }
```

Uses [micromatch](https://github.com/micromatch/micromatch) for `pattern` and `ignore` of files.

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    