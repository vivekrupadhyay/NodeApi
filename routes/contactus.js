const express = require('express');
const router = express.Router();
const mailjet = require('../config/mail');
const ContactUs = require('../models/contactus');
const fs = require('fs');

router.post('/', (req, res, next) => {
  ContactUs.create({
    purpose: req.body.purpose,
    name: req.body.name,
    country: req.body.country,
    companyName: req.body.companyName,
    email: req.body.email,
    subject: req.body.subject,
    comment: req.body.comment
  });

  const request = mailjet.post('send').request({
    FromEmail: process.env.ADMIN_EMAIL,
    FromName: process.env.ADMIN_NAME,
    Subject: 'Mosaic Things - Marketplace Thank you for contacting us',
    'Text-part': fs.readFileSync(__dirname + '/../templates/mail/contactus.ejs', 'utf-8'),
    Recipients: [{ 'Email': req.body.email }]
  });
  res.status(201).end();
  next();
});
module.exports = router;
