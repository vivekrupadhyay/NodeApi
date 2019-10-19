const express = require('express');
const router = express.Router();
const mailjet = require('../config/mail');
const Subscription = require('../models/subscription');
const fs = require('fs');

router.post('/subscribe', (req, res, next) => {
  Subscription.create({
    subscriptionEmail: req.body.subscriptionEmail
  });

  const request = mailjet.post('send').request({
    FromEmail: process.env.ADMIN_EMAIL,
    FromName: process.env.ADMIN_NAME,
    Subject: 'Mosaic Things - Marketplace Newsletter Subscription',
    'Text-part': fs.readFileSync(__dirname + '/../templates/mail/subscription.ejs', 'utf-8'),
    Recipients: [{ 'Email': req.body.subscriptionEmail }]
  });
  res.status(201).end();
  next();
});
module.exports = router;
