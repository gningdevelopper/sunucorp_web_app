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
  console.log('current user id: ', req.userId);
  console.log('current user : ', req);
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  conseole.log('current user id: ', req.userId);
  res.status(200).send("Admin Content.");
};

// exports.userMembers = (req, res) => {
//   var userid=req.userId
//   Members.findAll({
//     include:[
//       {
//         model:Category,
//         attributes:['id'], as : 'categories',
//         include:[{
//           model:User, attributes: ['id'],as: 'users', where: {id:userid}
//         }]
//       }
//     ]
//   })
//     .then(data=>{
//         res.send(data)
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:
//               err.message || "Some error occurred while retrieving attactions."
//           });
//     })
// }


exports.userMembers = (req, res) => {
  var userid=req.userId
  Members.findAll({
    include:[
      {
        model:User, attributes: ['id'],as: 'users', where: {id:userid}
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


exports.userMenu = (req, res) => {
  var userid=req.userId
  Menu.findAll({
    include:[
      {
        model:User,
        attributes:['id'], as : 'categories', where: {id:userid}
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

exports.findAll= (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err=>{
      res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
  })
}

exports.findOne = (req, res)=>{
  id=req.userId
  User.findOne({
    where:{
      id:id
    }
  })
    .then(data=>{
      res.send(data)
    })
    .catch(err=>{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    })
}