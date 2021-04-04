const assert = require('assert');
const app = require('../../src/app');

describe('\'standard\' service', () => {
  it('registered the service', () => {
    const service = app.service('standard');

    assert.ok(service, 'Registered the service');
  });
});
