const express = require("express");
const router = express.Router();
const controller = require("../controllers/app.controller");

router.get("/", controller.index);

router.post("/enviarMail", (req, res) => {
  controller.mail(req.body,res);
});

module.exports = router;
