const sprequestsp = require("sp-request");
const sp = {};


sp.getList = ()=>{

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
    function () {
      console.log("list just created!!!");
    },
    function (err) {
      if (err.message.indexOf("-2130575342") === -1) {
        console.log("Hmmmmm something went wrong");
        console.log(err);
        return;
      }
      console.log("list already exists!!!");
    }
  )
  .catch(function (err) {
    console.log("Hmmmmm something went wrong");
    console.log(err);
  });
}

module.exports = sp;
