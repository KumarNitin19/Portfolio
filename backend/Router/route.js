const express = require('express');
const router = express.Router();

const InfoController = require('./../Controller/controller');

router.post('/message', InfoController.addNewMessage);

module.exports = router;