const htmlMail = require("./emailBody");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const SapCFMailer = require("sap-cf-mailer").default;
const mailer = {};

mailer.enviarMail = async (input) => {
  await mailTo(input)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

function mailTo(req) {
  return new Promise(async (resolve, reject) => {
    //let testAccount = await nodemailer.createTestAccount();
    const CLIENT_ID =
      "539214896531-5kd3gvis26kkaqh1e0jg2o6qth9hvbur.apps.googleusercontent.com";
    const CLIENT_SECRET = "fkWMQfOafkPM0_NNiq1nEnL9";
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN =
      "1//04_5fjxEjf9bvCgYIARAAGAQSNwF-L9IrhzCwBC-ymuAJ3zDY6CoQdMaSJ9m-KypQ5egYY5wB-xM_-Gf1xDIHhuGs4shoDYfa6iA";
    const auth2 = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );

    auth2.setCredentials({ refresh_token: REFRESH_TOKEN });
    const accessToken = await auth2.getAccessToken();
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: "priscila.parafita56@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    }); /*
      var transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {

        },
    });*/

    // var transport = new SapCFMailer("outlook");
    console.log(req)
    transport.sendMail(
      {
        from: "bacardi <prueba@gmail.com>",
        to: "priscila.parafita56@gmail.com",
        subject: "New Request",
        text: "Dear",
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
