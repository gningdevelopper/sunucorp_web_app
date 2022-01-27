const db = require("../models");
const Members = db.members;
const Category = db.category
const Op=db.Sequelize.Op

exports.findAll= (req, res)=>{
    Category.findAll()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{

        })
}

exports.findOne= (req, res)=>{
    Category.findOne()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{

        })
}

exports.create= (req, res)=>{
    Category.create({
        name:req.body.name,
        userId:req.userId
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{

    })
}

exports.update = (req, res) => {

}

exports.findMembersByCategory= (req, res)=>{

}

exports.delete= (req, res)=>{

}
