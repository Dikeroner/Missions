const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/RestApiModel.js'), // Cargamos el modelo 
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/Usuariosdb', {useNewUrlParser: true});

  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(bodyParser.json());

  const routes = require('./api/routes/RestApiRoutes.js'); // Importamos el route
  routes(app); // Registramos el route


  app.listen(port);

console.log('RestApi RESTful API server started on: ' + port);