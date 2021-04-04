// Initializes the `standard` service on path `/standard`
const { Standard } = require('./standard.class');
const createModel = require('../../models/standard.model');
const hooks = require('./standard.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/standard', new Standard(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('standard');

  service.hooks(hooks);
};
