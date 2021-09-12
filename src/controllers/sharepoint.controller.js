const sprequestsp = require("sp-request");
const sp = {};

sp.getList = () => {
  return new Promise((resolve, reject) => {
    var creds = {
      username: "pparafita@bacardi.com",
      password: "pp$W2021M",
    };
    var request = sprequestsp.create(creds);
    request
      .requestDigest("https://bacardi.sharepoint.com/SitesPages/Home")
      .then(function (digest) {
        return request.post(
          "https://bacardi.sharepoint.com/SitesPages/Home" + "/_api/web/lists",
          {
            body: {
              __metadata: { type: "SP.List" },
              AllowContentTypes: true,
              BaseTemplate: 100,
              ContentTypesEnabled: false,
              Description: "Test list",
              Title: "InterviewGuide",
            },
            headers: {
              "X-RequestDigest": digest,
            },
          }
        );
      })
      .then(
        function (data) {
          console.log("list just created!!!");
          resolve("list just created!!!");
        },
        function (err) {
          if (err.message.indexOf("-2130575342") === -1) {
           //console.log("Hmmmmm something went wrong");
           // console.log(err);
            reject(err);
          }
         // console.log("list already exists!!!");
          reject("existe");
        }
      )
      .catch(function (err) {
        //console.log("Hmmmmm something went wrong");
        //console.log(err);
        reject(err);
      });

  });
};
module.exports = sp;
