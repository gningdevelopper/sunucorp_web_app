const Sequelize = require('sequelize');
 
const self = module.exports;
let sequelize;

exports.initialize = () => {
  if (!sequelize) {
    //const dbName = "dbtest";
    const dbName = "testdb";
    const dbUsername = "postgres";
    const dbPassword = "admin";
    const dbHost = "localhost";
    //const dbPort = 5432;
    return new Sequelize(dbName, dbUsername, dbPassword, {
      host: dbHost,
     // port: dbPort,
      dialect: 'postgres',
      define: {
        timestamps: false
      },
      operatorsAliases: false,
    
    });
  }

  return sequelize;
};

module.exports = self.initialize();