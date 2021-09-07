const htmlMail = require('./emailBody')
const nodemailer = require("nodemailer");
const mailer = {};

mailer.enviarMail = async (req, res) => {
  let status = await mailTo(req);
  console.log(status);
  
};

async function mailTo(req) {
  return new Promise((resolve, reject) => {
    //let testAccount = await nodemailer.createTestAccount();
    console.log(req.email);
    var transport = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "ppa_56@hotmail.com",
        pass: "Tone2015",
      },
    });

    transport.sendMail(
      {
        from: "ppa_56@hotmail.com",
        to: req.email,
        subject: "New Request",
        text:"Dear" + req.name,
        html: htmlMail
      },
      (error, info) => {
        if (error) {
          console.log(error);
          resolve(500);
        } else {
          console.log("lo ejecuto bien");
          resolve(200);
        }
      }
    );
  });
}
module.exports = mailer;
