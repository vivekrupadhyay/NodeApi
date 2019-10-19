require('dotenv').config();

const express = require('express');
const app = express();
const sequelize = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use('/user', require('./routes/user'));
app.use('/contactus', require('./routes/contactus'));

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
