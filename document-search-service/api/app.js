const express = require("express");
const app = express();
const config = require("../config")[process.env.NODE_ENV || "development"];
const log = config.log();
require("dotenv").config();
const connectDB = require("../config/db");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
const cors = require("cors");
const host = process.env.FRONTEND || "http://localhost:3000"
app.use(cors({ credentials: true, origin: host }));
// const { Client } = require("@elastic/elasticsearch");
// const client = new Client({
//   node: "http://localhost:9200",
// });
/*

Local mongoDB

To start : brew services start mongodb-community@5.0

To stop : brew services stop mongodb-community@5.0

*/

const uploadRoutes = require("../api/routes/docUploadRoutes");
const searchRoutes = require("../api/routes/searchRoutes");
app.use(cookieParser());
app.use((req, res, next) => {
  log.debug(`${req.method}: ${req.url}`);
  return next();
});

app.use("/documentation/upload", uploadRoutes);
app.use("/documentation/search", searchRoutes);

module.exports = app;
