const mailer = require("./mail.controller");
const controller = {};
const path = require("path");
const { request } = require("http");

// I like to use resolve so I always get an absolute path.
const publicPath = path.resolve(__dirname, "public");

controller.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

controller.mail = async (request, res) => {
  // var status = mailer.enviarMail()
  var status = await mailer.enviarMail(request);
  console.log(status)
  res.send(status);

  //status.then(function(value){
  // console.log(value)
  //res.send(value)
  //})

  //if(status)
  //res.send(status);
};

module.exports = controller;
