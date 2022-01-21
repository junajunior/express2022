const express = require("express");
const router = express.Router();
const { register } = require("../controller/AuthController");
const { index, detail } = require("../controller/UserController");
const validationMiddleware = require("../middleware/validationMiddleware");
const { validationRegister } = require("../validator/authValidator");

router.get('/',(req,res)=>{
  res.send('ok')
})

router.post(
  "/register",
  validationRegister,
  validationMiddleware,
  register,
  );

  //users
  router.get("/users" , index),
  router.get("/users/:id" , detail)


module.exports = router;