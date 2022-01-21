const express = require("express");
const mongoose = require('mongoose');
const userRouter = require("./routers/userRouter");
const app = express();


app.use(express.json());
app.set("view engine", "ejs");
app.use('/uploads',express.static('uploads'))

const DB ="mongodb+srv://arfin:arfin123@cluster0.1n0fi.mongodb.net/userr?retryWrites=true&w=majority";

mongoose.connect(DB)
  .then(() => {
    console.log("connect sucesss DB");
  })
  .catch((err,) => {
    console.log(err);
  });

  app.use('/api',userRouter )

app.listen(3000, () => {
  console.log("server Running 3000");
});
