const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/api", routes);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@icluster-9aamf.mongodb.net/${process.env.DB_BASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(3000);
