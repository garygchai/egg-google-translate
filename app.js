'use strict';
const { Translate } = require('@google-cloud/translate');

module.exports = function(app) {
  const options = app.config.googleTranslate;
  app.translation = new Translate(options);
};
