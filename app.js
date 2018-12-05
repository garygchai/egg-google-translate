'use strict';
const { Translate } = require('@google-cloud/translate');
const axios = require('axios');
const querystring = require('querystring');

module.exports = function(app) {
  const options = app.config.googleTranslate;
  app.translation = new Translate(options);
  // 免费试用翻译接口
  if (options.hacked) {
    app.translation.translate = async (text, target) => {
      const params = {
        client: 'gtx',
        tl: target,
        dt: [ 'at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't' ],
        ie: 'UTF-8',
        oe: 'UTF-8',
        q: text,
      };
      const url = `${options.hackedUrl}?${querystring.stringify(params)}`;
      const res = await axios.get(url);
      // 处理返回参数，与正式的API保持一致
      if (res.data) {
        return [
          res.data[0][0][0],
          {
            data: {
              translations: [{
                translatedText: res.data[0][0][0],
                detectedSourceLanguage: res.data[8][0][0],
              }],
            },
          },
        ];
      }
    };
  }
};
