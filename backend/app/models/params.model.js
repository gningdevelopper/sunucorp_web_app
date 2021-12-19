module.exports = (sequelize, Sequelize) => {
    const Params = sequelize.define("params", {
      parameter: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      }
    });
  
    return Params;
  };