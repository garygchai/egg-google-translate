# egg-google-translate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-google-translate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-google-translate
[travis-image]: https://img.shields.io/travis/eggjs/egg-google-translate.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-google-translate
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-google-translate.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-google-translate?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-google-translate.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-google-translate
[snyk-image]: https://snyk.io/test/npm/egg-google-translate/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-google-translate
[download-image]: https://img.shields.io/npm/dm/egg-google-translate.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-google-translate

Egg plugin for google translation.

## Install

```bash
$ npm i egg-google-translate --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.googleTranslate = {
  enable: true,
  package: 'egg-google-translate',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.googleTranslate = {
  key: {YOUR_API_KEY}, // Google Translation API
  hacked: boolean, // 是否开启Hacked，开启则翻译接口可以免费试用，忽略Key
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## API
```
this.app.translation.translate(text, target)
this.app.translation.detect(text)
this.app.translation.getLanguages()
```

## Example
```
'use strict'

const { Controller } = require('@ali/nut')

class TranslationController extends Controller {
  translate () {
    const {
      text,
      target
    } = this.ctx.request.body
    const results = await this.app.translation.translate(text, target)
    if (results) {
      this.ctx.body = results[0]
    }
  }
  detect () {
    const {
      text
    } = this.ctx.request.body
    const results = await this.app.translation.detect(text)
    if (results) {
      this.ctx.body = results[0]
    }
  }
  languages () {
    const results = await this.app.translation.getLanguages()
    if (results) {
      this.ctx.body = results[0]
    }
  }
}

module.exports = TranslationController
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
