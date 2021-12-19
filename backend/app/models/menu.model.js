module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define("menu", {
      category: {
        type: Sequelize.STRING
      },
      descriptionUS: {
        type: Sequelize.TEXT
      },
      descriptionFR: {
          type: Sequelize.TEXT
      },
      descriptionSP: {
          type: Sequelize.TEXT
      },
      descriptionCH: {
          type: Sequelize.TEXT
      },
      icon: {
        type: Sequelize.STRING
      },
      imageBG: {
        type: Sequelize.STRING
      },
      svg: {
        type: Sequelize.TEXT
      }
    });
  
    return Menu;
  };