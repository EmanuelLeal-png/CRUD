
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Aula = sequelize.define('Aula', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tema: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_aula: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'aulas',
    timestamps: false
});

module.exports = Aula;
