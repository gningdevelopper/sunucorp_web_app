module.exports = app=>{
    const { authJwt } = require("../middlewares");
    const controller = require("../controllers/menu.controller");


    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    var router=require("express").Router();
  
  
    // router.get("/",
    //   [authJwt.verifyToken],
    //   controller.findAll)

    router.get("/",
      [authJwt.verifyToken],
      controller.userMenu)
  
    router.post(
        "/add",
       // upload.single("file"),
        [authJwt.verifyToken,],
        controller.create
    )

    router.post(
        "/addsvg/:id",
        [authJwt.verifyToken],
        controller.updateSvg
    )

    router.post(
        "/addicon/:id",
        [authJwt.verifyToken],
        controller.updateIcon
    )


    router.post(
        "/update/:id",
        [authJwt.verifyToken],
        controller.update
    )

    app.use('/api/menu/', router);
  }