const express = require('express');
const expressRouter = express.Router();
const asideCtrl = require('../controller/asideCtrl');

expressRouter.get('/aside/menu',indexCtrl.menu);

module.exports = expressRouter