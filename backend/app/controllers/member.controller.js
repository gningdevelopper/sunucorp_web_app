const { members } = require("../models");
const db = require("../models");
const Members = db.members;
const Op=db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Members.findAll()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving attactions."
          });
    })
};

 exports.findByCategory=(req,res)=>{
    // const category = req.params.category;
    // Members.findAll({
    //     where:{category:category}
    // })
    // .then(data=>{
    //     res.send(data)
    // })
    // .catch(err=>{
    //     res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while retrieving attactions."
    //       });
    // })
 };

exports.findEvents=(req,res)=>{
    members.findAll({
        where:{
            date:{[Op.not]:null}
            // [Op.not]:[
            //     {
            //         date:null
            //     }
            // ]
        }
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

exports.findByType=(req,res)=>{
    const type = req.params.type;
    Members.findAll({
        where:{type:type}
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
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };