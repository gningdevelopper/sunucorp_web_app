//const { members } = require("../models");
const db = require("../models");
const Members = db.members;
const User= db.user
const Op=db.Sequelize.Op
const uploadFile=require('../middlewares/upload')
fs=require('fs')

// Create and Save a new Members
exports.create = async (req, res) => {
    Members.create({
        name:req.body.name,
        type:req.body.type,
        descriptionus: req.body.descriptionus,
        descriptionfr: req.body.descriptionfr,
        descriptionsp: req.body.descriptionsp,
        descriptionch: req.body.descriptionch,
        document: req.body.document,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        date: req.body.date,
        svg: req.body.svg,
        categoryId: req.body.categoryId,
        userId: req.userId
        }).then(async data=>{
            //res.send(data);
            id=data.id;
            fileName="member_"+ id +"_picture"
            try{
                await uploadFile(req, res);

                if (req.file == undefined) {
                    return res.status(400).send({ message: "Please upload a file!" });
                }

                var img = fs.readFileSync(req.file.path);
                var encode_image = img.toString('base64');

                Members.update(
                    {picture: fileName, picturedata: new Buffer(encode_image, 'base64')},
                    {where:{id:id}}
                )
                .then(data1=>{
                    //res.send(data1);
                    res.send(data);
                })
                .catch(err=>{
                    //console.log(err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Member."
                        });
                })
            }catch(e){

            }
        }).catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Member."
            });
        })
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
              err.message || "Some error occurred while retrieving members."
          });
    })
};

 exports.findByCategory=(req,res)=>{
    const category = req.params.category;
    Members.findAll({
        where:{categoryId:category}
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

exports.findEvents=(req,res)=>{
    Members.findAll({
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
              err.message || "Some error occurred while retrieving members."
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
              err.message || "Some error occurred while retrieving members."
          });
    })
};

exports.addPictureOne = async (req, res) => {
    // fileName="picture1"+ req.userID
    const id=req.params.id
    fileName="member_"+ id +"_picture1"
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        var img = fs.readFileSync(req.file.path);
        var encode_image = img.toString('base64');
        Members.update({picture1: fileName, picture1data: new Buffer(encode_image, 'base64')},
            {where:{id:id}})
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving members."
                  });
            })
    }catch(err){
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.addPictureTwo = async (req, res) => {
    const id=req.params.id
    fileName="member_"+ id +"_picture2"
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        var img = fs.readFileSync(req.file.path);
        var encode_image = img.toString('base64');
        Members.update({picture2: fileName},
            {where:{id:id}})
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving members."
                  });
            })
    }catch(e){
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.addPictureThree = async (req, res) => {
    const id=req.params.id
    fileName="member_"+ id +"_picture3"
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        Members.update({picture3: fileName},
            {where:{id:id}})
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving members."
                  });
            })
    }catch(e){
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.addPictureFour = async (req, res) => {
    const id=req.params.id
    fileName="member_"+ id +"_picture4"
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        Members.update({picture4: fileName},
            {where:{id:id}})
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving members."
                  });
            })
    }catch(e){
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.addPictureFive = async (req, res) => {
    const id=req.params.id
    fileName="member_"+ id +"_picture5"
    try{
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        Members.update({picture5: fileName},
            {where:{id:id}})
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving members."
                  });
            })
    }catch(e){
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

exports.getAllFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/static/uploads/";

    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }

      let fileInfos = [];

      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url: baseUrl + file,
        });
      });

      res.status(200).send(fileInfos);
    });
}

exports.download=(req, res)=>{
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/uploads/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    id=req.params.id
    id=req.params.id;
    Members.update(req.body,
        {where:{id:id}}
    )
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving members."
          });
    })
    
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

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
