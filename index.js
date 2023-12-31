const express = require("express");
const connectDB = require("./config/database");
const router = require("./router/router");
const fileUpload = require("express-fileupload");
const cloudinary = require("./config/cloudinary");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const fileupload = require("express-fileupload");
app.use(fileupload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

//db se connect krnah 
const db = require("./config/database");
db.connect();

//cloud se connect krna h 

cloudinary.cloudinaryConnect();

app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/api", router);
app.get("/test", (req, res) => {
  res.send(`<h1>Hello ji </h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
