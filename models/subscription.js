const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/db');

class Subscription extends Model { }
Subscription.init({
  subscriptionEmail: Sequelize.STRING
}, { sequelize, modelName: 'subscription' });

module.exports = Subscription;
