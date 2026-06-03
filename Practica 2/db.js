const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('practica_web3', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const Categoria = sequelize.define('Categoria', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.STRING(255) }
}, { tableName: 'categorias', timestamps: true });

const Producto = sequelize.define('Producto', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, { tableName: 'productos', timestamps: true });

Categoria.hasMany(Producto, { foreignKey: 'categoriaId', onDelete: 'CASCADE' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });

module.exports = { sequelize, Categoria, Producto };