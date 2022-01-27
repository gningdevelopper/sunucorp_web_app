const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./app/models");
const Role = db.role;

const app = express();

var corsOptions = {
  //origin: "http://localhost:8080"
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sunucorp application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });

db.sequelize.sync();

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
  }

  global.__basedir = __dirname;
  global.fileName = "This can be accessed anywhere!";

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/members.routes')(app);
require('./app/routes/category.routes')(app);
require('./app/routes/menu.routes')(app);