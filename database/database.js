const Sequelize = require("sequelize");



const Connection = new Sequelize('ingles','root','Fernandinho123',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})


module.exports = Connection;

