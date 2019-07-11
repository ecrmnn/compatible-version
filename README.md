# compatible-version
> Test if version-ish string is compatible with current Node version

[![Travis](https://img.shields.io/travis/ecrmnn/compatible-version.svg?style=flat-square)](https://travis-ci.org/ecrmnn/compatible-version.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/compatible-version.svg?style=flat-square)](http://badge.fury.io/js/compatible-version)
[![npm downloads](https://img.shields.io/npm/dm/compatible-version.svg?style=flat-square)](http://badge.fury.io/js/compatible-version)
[![npm license](https://img.shields.io/npm/l/compatible-version.svg?style=flat-square)](http://badge.fury.io/js/compatible-version)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install compatible-version --save
```

### Usage
```js
const compatible = require('compatible-version');

// Given Node.js 8.10.0
compatible('v8.10.0');
//=> true

// Given Node.js 8.10.0
compatible('8.10');
//=> true

// Given Node.js 8.10.0
compatible('v8');
//=> true

// Given Node.js 8.10.0
compatible('v8.10.2');
//=> false

// Given Node.js 8.10.0
compatible('8.8');
//=> false

// Given Node.js 8.10.0
compatible('v10');
//=> false
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)