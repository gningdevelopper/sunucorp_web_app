const db = require("../models");
const User = db.user
const Op=db.Sequelize.Op
const Menu= db.menu
const Members= db.members
const Category= db.category


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.userMember = (req, res) => {
  var userid=req.params.user
  Members.findAll({
    include:[
      {
        model:Category,
        attributes:['id'], as : 'categories',
        include:[{
          model:User, attributes: ['id'],as: 'users', where: {id:userid}
        }]
      }
    ]
  })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving attactions."
          });
    })
}
//   exports.moderatorBoard = (req, res) => {
//     res.status(200).send("Moderator Content.");
//   };