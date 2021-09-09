const mailer = require("./mail.controller");
const controller = {};
const path = require("path");
const { request } = require("http");
const { Observable } = require("rxjs");

// I like to use resolve so I always get an absolute path.
const publicPath = path.resolve(__dirname, "public");

controller.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

controller.mail = (request, resp) => {
  // var status = mailer.enviarMail()
  //  var status = new Observable((observer) => {
  //    observer.next(mailer.enviarMail(request));
  //  });

  //status.subscribe(response => console.log('mail' + response));

mailer.enviarMail(request)


  //console.log(status);
  //res.send(status);

  //status.then(function(value){
  // console.log(value)
  //res.send(value)
  //})

  //if(status)
  //res.send(status);
};

module.exports = controller;
