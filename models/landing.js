class Landing extends Model { }
Landing.init({
    title: Sequelize.STRING,
    description: Sequelize.TEXT
}, { sequelize, modelName: 'landing' });
