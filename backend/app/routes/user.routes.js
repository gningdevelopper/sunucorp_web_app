// const { authJwt } = require("../middlewares");
// const controller = require("../controllers/user.controller");

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.get("/api/test/all", controller.allAccess);

//   app.get(
//     "/api/test/user",
//     [authJwt.verifyToken],
//     controller.userBoard
//   );

//   // app.get(
//   //   "/api/test/mod",
//   //   //[authJwt.verifyToken, authJwt.isModerator],
//   //   [authJwt.verifyToken],
//   //   controller.moderatorBoard
//   // );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
// };

module.exports = app=>{
  const { authJwt } = require("../middlewares");
  const controller = require("../controllers/user.controller");
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var router=require("express").Router();

  // router.get('/members/:userid',
  //   [authJwt.verifyToken],
  //   controller.userMembers
  // )
  router.get('/members',
    [authJwt.verifyToken],
    controller.userMembers
  )

  // router.get('/menu/:userid',
  //   [authJwt.verifyToken],
  //   controller.userMenu
  // )
  router.get('/menu',
    [authJwt.verifyToken],
    controller.userMenu
  )

  router.get("/",
    [authJwt.verifyToken],
    controller.findAll)

  router.get("/test/all", controller.allAccess);

  router.get(
    "/test",
    [authJwt.verifyToken],
    controller.userBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  router.get("/userinfo",
    [authJwt.verifyToken],
    controller.findOne
  )

  app.use('/api/users/', router);
}