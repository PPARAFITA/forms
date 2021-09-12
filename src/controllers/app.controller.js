const mailer = require("./mail.controller");
const sp = require("./sharepoint.controller");
const controller = {};
const path = require("path");
const { request } = require("http");
const { Observable } = require("rxjs");

// I like to use resolve so I always get an absolute path.
const publicPath = path.resolve(__dirname, "public");

controller.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

controller.sharepoint = async (req) => {
  var msg = await sp
    .getList()
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return "error";
    });

  return msg;
};

controller.mail = async (request, resp) => {
  var status = await mailer.enviarMail(request.body);
  resp.send(status);
};

module.exports = controller;
