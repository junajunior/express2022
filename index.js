const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

const port = process.env.PORT || 8000;
const router = require("./routes");
require("dotenv").config();
app.use(express.json())
app.use(router);


app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});


