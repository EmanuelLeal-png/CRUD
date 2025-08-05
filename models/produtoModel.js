
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

// Associação: Produto pertence a Categoria
const Categoria = require('./categoriaModel');
Produto.belongsTo(Categoria, { foreignKey: 'categoria', as: 'categoriaInfo' });

module.exports = Produto;