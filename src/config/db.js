const sequelize = require('sequelize');

// Configurações da base de dados
const database = new sequelize('projetoJS', 'user123', 'senha123',
{
    dialect: 'mssql', host:'localhost', port: 1433
});

database.sync();

module.exports = database;