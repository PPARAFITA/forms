const express = require("express");
const router = express.Router();
const controller = require("../controllers/app.controller");

router.get("/", controller.index);

router.post("/enviarMail", async (req, res) => {
  controller.mail(req.body,res);
 //var result = await controller.sharepoint(req);
 //res.send(result);
});

module.exports = router;
