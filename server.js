const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      usersCtrl = require('./usersCtrl');
      port = 3000;


//======TOP LEVEL MIDDLEWARE ===========//
app.use(bodyParser.json());




//========ENDPOINTS=============//
app.get('/api/users', usersCtrl.getAllUsers);
app.get('/api/users/:id', usersCtrl.getUserById);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonadmins);
app.get('/api/user_type/:type', usersCtrl.getUsersByType);
app.put('/api/users/:id', usersCtrl.updateUserById);
app.post('/api/users', usersCtrl.addUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);




app.listen(port, ()=> console.log(`Listening on port ${port}`));