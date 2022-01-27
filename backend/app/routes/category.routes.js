module.exports = app=>{
    const { authJwt } = require("../middlewares");
    const controller = require("../controllers/category.controller");
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    var router=require("express").Router();
  
  
    router.get("/",
      [authJwt.verifyToken],
      controller.findAll)

    router.post(
        "/add",
        [authJwt.verifyToken],
        controller.create
    )

    app.use('/api/category/', router);
  }