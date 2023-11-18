const Sequelize=require('sequelize')
require("dotenv").config()
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.HOST,
    dialect:'mysql'
  });
  module.exports=sequelize
  
  
  