const express = require("express");
const router = express.Router();
const path = require('path')
const controller = require("../controllers/app.controller");
const multer = require("multer");
const mimeTypes = require("mime-types");

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    console.log(file)
    cb("", "imagen." + mimeTypes.extension(file.mimetype));
  },
});

const upload = multer({
  storage: storage,
});


//Routes 
router.get("/", controller.index);

router.post("/enviarMail", upload.single("attachFile"), async (req, res) => {
  controller.mail(req, res);
  //var result = await controller.sharepoint(req);
  //res.send(result);
});

router.post("/files", async (req, res) => {
  controller.mail(req, res);
  //var result = await controller.sharepoint(req);
  //res.send(result);
});

module.exports = router;
