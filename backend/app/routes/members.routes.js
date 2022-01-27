module.exports = app=>{
    const { authJwt } = require("../middlewares");
    const controller = require("../controllers/member.controller");


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
      controller.userMembers)

    router.post(
        "/",
       // upload.single("file"),
        [authJwt.verifyToken,],
        controller.create
    )

    router.post(
        "/addpicture1/:id",
        [authJwt.verifyToken],
        controller.addPictureOne
    )

    router.post(
        "/addpicture2/:id",
        [authJwt.verifyToken],
        controller.addPictureTwo
    )

    router.post(
        "/addpicture3/:id",
        [authJwt.verifyToken],
        controller.addPictureThree
    )

    router.post(
        "/addpicture4/:id",
        [authJwt.verifyToken],
        controller.addPictureFour
    )

    router.post(
        "/addpicture5/:id",
        [authJwt.verifyToken],
        controller.addPictureFive
    )

    router.post(
        "/update/:id",
        [authJwt.verifyToken],
        controller.update
    )

    router.get(
        "/files",
        [authJwt.verifyToken],
        controller.getAllFiles
    )

    router.get(
        "/download/:name",
        [authJwt.verifyToken],
        controller.download
    )

    app.use('/api/members/', router);
  }