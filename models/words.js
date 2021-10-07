const Sequelize = require("sequelize");
const connection = require("../database/database");

const Palavra = connection.define("Palavra",{
    infinitive:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    past:{
         type:Sequelize.STRING,
        allowNull:false,
    },
  pastParticiple:{
         type:Sequelize.STRING,
        allowNull:false,
    },
    meening:{
         type:Sequelize.STRING,
        allowNull:false,
    },

});


    

Palavra.sync({force:false});


module.exports = Palavra;

