// const { verifySignUp } = require("../middlewares");
// const controller = require("../controllers/auth.controller");

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.post(
//     "/api/auth/signup",
//     [
//       verifySignUp.checkDuplicateUsernameOrEmail,
//       verifySignUp.checkRolesExisted
//     ],
//     controller.signup
//   );

//   app.post("/api/auth/signin", controller.signin);
// };

module.exports = app => {
  const { verifySignUp } = require("../middlewares");
  const controller = require("../controllers/auth.controller");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  var router = require("express").Router();

  router.post('/signup',
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  controller.signup
  )

  router.post('/signin',controller.signin)

  app.use('/api/auth/', router);
};