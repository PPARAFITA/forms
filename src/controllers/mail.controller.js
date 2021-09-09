const htmlMail = require("./emailBody");
const nodemailer = require("nodemailer");
const SapCFMailer = require("sap-cf-mailer").default;
const mailer = {};

mailer.enviarMail = async (input ) => {
  await mailTo(input)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
        console.log(error);
        return error
    });
};

function mailTo(req) {
  return new Promise((resolve, reject) => {
    //let testAccount = await nodemailer.createTestAccount();

     /*var transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: true, // true for 465, false for other ports
      auth: {
    
      },
      var transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {

        },
    });*/


    var transport = new SapCFMailer("outlook");

    transport.sendMail(
      {
        from: "ppa_56@hotmail.com",
        to: req.email,
        subject: "New Request",
        text: "Dear" + req.name,
        html: htmlMail,
      },
      (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("lo ejecuto bien");
          resolve(200);
        }
      }
    );
  });
}
module.exports = mailer;
