module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define("members", {
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        descriptionus: {
            type: Sequelize.TEXT
        },
        descriptionfr: {
            type: Sequelize.TEXT
        },
        descriptionsp: {
            type: Sequelize.TEXT
        },
        descriptionch: {
            type: Sequelize.TEXT
        },
        picture: {
            type: Sequelize.STRING
        },
        picture1: {
            type: Sequelize.STRING
        },
        picture2: {
            type: Sequelize.STRING
        },
        picture3: {
            type: Sequelize.STRING
        },
        picture4: {
            type: Sequelize.STRING
        },
        picture5: {
            type: Sequelize.STRING
        },
        documents: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        svg: {
            type: Sequelize.TEXT    
        }
    });
  
    return Members;
  };