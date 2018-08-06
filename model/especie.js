const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Especie = sequelize.define('especie',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.BIGINT
  }
},{
  timestamps: false
});

module.exports = Especie;
