const express = require('express');
const expressRouter = express.Router();
const indexCtrl = require('../controller/indexCtrl');

expressRouter.get('/login',indexCtrl.login);
expressRouter.post('/loginP',indexCtrl.login);

module.exports = expressRouter