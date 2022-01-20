const express = require("express");
const app = express();
const fileUploade = require("express-fileupload");
const path = require("path");

app.use(express.json());
app.set("view engine", "ejs");
app.use(fileUploade({
    useTempFiles: true,
    tempFileDir: path.join(__dirname,'tmp'),
    createParentPath: true,
    // limits: { fileSize: 50 * 1024 * 1024 },
    
}));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/singal", async (req, res) => {
  try {
    const file = req.files.mFile;
    console.log(file);
    const fileName = new Date().getTime().toString() + path.extname(file.name);
      const savePath = path.join(__dirname, "public", "uploads", fileName);

      if (file.truncated) {
          throw new Error("file is big ")
      }
    //   if (file.mimetype !== 'image/JPG') {
    //     throw new Error("file is not support ")
    //   }

    await file.mv(savePath);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error Uploading File");
  }
});
app.listen(3000, () => {
  console.log("server Running 3000");
});
