const app = require('./app');

exports.blogapi = function blogapi(req, res) {
  app.handle(req, res);
};

