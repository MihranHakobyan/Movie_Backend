const express = require('express');
const SubscribeController = require('../controllers/subscribe');
const {customers, subscriptions} = require('stripe');

const router = express.Router();

router.post('/sub',SubscribeController.pay)
module.exports=router