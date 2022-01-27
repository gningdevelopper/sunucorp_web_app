const db = require("../models");
const Menu = db.menu;
const Op = db.Sequelize.Op;
const uploadFile=require('../middlewares/upload')

// Create and Save a new Tutorial
exports.create = async (req, res) => {

  try{
    fileName="u_"+ req.userId+"menu_BG"+Date.now()
    await uploadFile(req, res)

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Menu.create({
      category:req.body.category,
      descriptionus: req.body.descriptionus,
      descriptionfr: req.body.descriptionfr,
      descriptionsp: req.body.descriptionsp,
      descriptionch: req.body.descriptionch,
      //icon: req.body.icon,
      imageBG: fileName,
      //svg: req.body.svg
      userId:req.userId,
    })
    .then(data =>{
      res.send(data)
    })
    .catch(err =>{
      
    })
    
  }
  catch(err){
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }

};

exports.updateIcon= async (req, res)=>{
  id=req.params.id;
  fileName= "u_"+ req.userId + "menu_icon"+ Date.now()
  try {

    await uploadFile(req, res)

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Menu.update({icon: fileName},
      {where:{id:id}}
    )
    .then(data =>{
      res.send(data)
    })
    .catch(err =>{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    })
  }
  catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }


}

exports.updateSvg= async (req, res)=>{
  id=req.params.id;
  fileName= "u_"+ req.userId + "menu_svg"+ Date.now()
  try {

    await uploadFile(req, res)

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    Menu.update({svg: fileName},
      {where:{id:id}}
    )
    .then(data =>{
      res.send(data)
    })
    .catch(err =>{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members."
      });
    })
  }
  catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
}

exports.update = async (req, res) => {
  id=req.params.id;
  Menu.update(
    req.body,
    {where:{id:id}}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving attactions."
    });
  })
}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Menu.findAll()
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
//   const category = req.params.category;
//   Menu.findAll({
//       where:{category:category}
//   })
//   .then(data=>{
//       res.send(data)
//   })
//   .catch(err=>{
//       res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving attactions."
//         });
//   })
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