module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      adresse:{
        type:Sequelize.STRING
      },
      contactName:{
          type:Sequelize.STRING
      }
    });
  
    return User;
  };