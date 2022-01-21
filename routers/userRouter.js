const express = require("express");
const userRouter = express.Router();
const { adduser } = require("../controllers/userControll");
const upload = require("../middleware/uploade");

userRouter.post('/',upload.single('avater'), adduser)
// userRouter.post('/',upload.array('avater[]'), adduser)

module.exports = userRouter;