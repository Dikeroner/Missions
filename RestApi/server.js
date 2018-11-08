const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  require('./api/routes/RestApiRoutes.js')(app);
  const mongoose = require('mongoose');
app.listen(port);



console.log('RestApi RESTful API server started on: ' + port);