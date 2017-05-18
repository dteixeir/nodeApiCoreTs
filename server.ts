// NPM Imports
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as promisify from 'promisify-node';
import * as methodOverride from 'method-override';
import * as _ from 'lodash';
import { Classes } from './domain';
import { Routes } from './routes';
import * as settings from './appSettings';

// Can not set a module variable in typescript
// so this has to remain a javascript import
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const routesController = new Routes(settings.setUp.routes);
let app: express.Application = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/taskList');
mongoose.connection.once('open', () => {

  // Load the routes.
  _.each(routesController.Routes, (routeConfig: Classes.Route) => {
    // had to use callback here due to setting promises in routes file.
    routesController.createRoute(app, routeConfig).then(controller => {
      app.use(routeConfig.Route, controller);
    });
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});