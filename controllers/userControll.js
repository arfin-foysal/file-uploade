
const User = require("../models/userModel");

const adduser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = new User({
      name,
      email,
      age,
    });

    // 3################singal file uploads#############
    // 3################singal file uploads#############
    // 3################singal file uploads#############
    if (req.file) {
      user.avater = req.file.path;
    }
    // 3################singal file uploads#############
    // 3################singal file uploads#############
    // 3################singal file uploads#############

    // if (req.files) {
    //   let path = ''
    //   req.files.forEach(function (files,index,arr) {
    //     path=path+files.path+ ','
    //   })
    //   path = path.substring(0, path.lastIndexOf(","))
    //   user.avater=path
    // }

    const allUser = await user.save();
    res.send(allUser);
  } catch (error) {
    res.send(error);
  }
};




module.exports = { adduser };
