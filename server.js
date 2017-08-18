const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      usersCtrl = require('./usersCtrl');
      port = 3000;


//======TOP LEVEL MIDDLEWARE ===========//
app.use(bodyParser.json());




//========ENDPOINTS=============//
app.get('/api/users', usersCtrl.getAllUsers);






app.listen(port, ()=> console.log(`Listening on port ${port}`));