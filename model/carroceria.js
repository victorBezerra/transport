const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/transporte');

var Carroceria = sequelize.define('carrocerias',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  descricao:{
    type: Sequelize.STRING
  }
},{
  freezeTableName: true,
  timestamps: false
});

module.exports = Carroceria;
