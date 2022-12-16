const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const db = require("./config/db");
const router = require("./router/user");

app.use(express.json());
app.use(cors());
app.use("/", router);
db();

app.listen(PORT, () => {
  console.log("Server is up and running");
});
