const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   config.DB,
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// );
const sequelize=require('../utils/sequelize-singleton')

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.params = require("../models/params.model")(sequelize, Sequelize);
db.members= require("../models/member.model")(sequelize, Sequelize);
db.category=require("../models/category.model")(sequelize, Sequelize);
db.menu=require("../models/menu.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// db.user.hasMany(db.category, { as: "categories" });
// db.category.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "users",
// });

db.user.hasMany(db.members, { as: "members" });
db.members.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.user.hasMany(db.menu, { as: "menus" });
db.menu.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.category.hasMany(db.members, { as: "members" });
db.members.belongsTo(db.category, {
  foreignKey: "categoryId",
  as: "categories",
});

db.ROLES = ["user", "admin"];

module.exports = db;