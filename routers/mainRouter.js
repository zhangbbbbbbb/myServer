const express = require('express');
const expressRouter = express.Router();
const mainCtrl = require('../controller/mainCtrl');

expressRouter.get('/vedio', mainCtrl.getVedio);
expressRouter.get('/fans', mainCtrl.getFans);
expressRouter.get('/:type/tags', mainCtrl.getTags);

module.exports = expressRouter