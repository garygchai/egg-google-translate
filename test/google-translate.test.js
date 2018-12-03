'use strict';

const mock = require('egg-mock');

describe('test/google-translate.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/google-translate-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, googleTranslate')
      .expect(200);
  });
});
