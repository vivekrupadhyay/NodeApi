const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/db');

class ContactUs extends Model { }
ContactUs.init({
  purpose: Sequelize.STRING,
  name: Sequelize.STRING,
  country: Sequelize.STRING,
  companyName: Sequelize.STRING,
  email: Sequelize.STRING,
  subject: Sequelize.STRING,
  comment: Sequelize.TEXT
}, { sequelize, modelName: 'contactUs' });

module.exports = ContactUs;
