const express = require("express");
const app = express();
const config = require("./config")[process.env.NODE_ENV || "development"];
const log = config.log();
require("dotenv").config();
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");

connectDB();

app.use((req, res, next) => {
  log.debug(`${req.method}: ${req.url}`);
  return next();
});
app.use(cookieParser());
const host = process.env.FRONTEND || "http://localhost:3000"
app.use(cors({ credentials: true, origin: host }));
const credRoutes = require("./api/routes/credRoutes");
app.use("/cred", credRoutes);

module.exports = app;
