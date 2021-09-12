const htmlMail = require("./emailBody");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const mailer = {};
const path = require('path');

// I like to use resolve so I always get an absolute path.



mailer.enviarMail = async (input) => {
  console.log(input);
  await mailTo(input)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
};

function mailTo(data) {
  return new Promise(async (resolve, reject) => {
    const publicPath = path.resolve(__dirname, "public");

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
    console.log(__dirname)

    transport.sendMail(
      {
        from: "bacardi <prueba@gmail.com>",
        to: data.email,
        subject: "New Request",
        text: "Dear Prim@",
        html: htmlMail,
        attachments: [
          {
            filename: "Bacardi.png",
            path: path.join(__dirname, "../../public/images/Bacardi.png"),
            cid: "logo", //my mistake was putting "cid:logo@cid" here!
          },
        ],
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
