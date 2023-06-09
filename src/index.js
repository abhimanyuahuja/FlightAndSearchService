const express = require("express");
const bodyParser = require("body-parser");
const { PORT, SYNC_DB } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");

const SetupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);

    // if (SYNC_DB) {
    //   console.log("running");
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

SetupAndStartServer();
