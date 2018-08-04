const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/transporte');

const Marca = sequelize.define('marca',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  descricao:{
    type: Sequelize.TEXT
  }
});

module.exports = Marca;
