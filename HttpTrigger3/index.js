const Crypto = require("crypto");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.log("This function is created to test the GitHub Webhooks");
  context.log("Req.headers", req.headers);
  context.log("Req.body", req.body);

  const hmac = Crypto.createHmac(
    "sha1",
    "XCS4qJtN6DpFzDsYDcJpGsof7aMtsARctG5SV4DBsjUVMocjsTt4fQ=="
  );
  const signature = hmac.update(JSON.stringify(req.body)).digest("hex");
  const shaSignature = `sha1=${signature}`;
  const gitHubSignature = req.headers["X-Hub-Signature"];

  if (!shaSignature.localeCompare(gitHubSignature)) {
    if (
      req.body &&
      req.body.pages &&
      req.body.pages.length &&
      req.body.pages[0].title
    ) {
      context.res = {
        body:
          "Page is " +
          req.body.pages[0].title +
          ", Action is " +
          req.body.pages[0].action +
          ", Event Type is " +
          req.headers["x-github-event"],
      };
    } else {
      context.res = {
        status: 400,
        body: "Invalid payload for Wiki event",
      };
    }
  } else {
    context.res = {
      status: 401,
      body: "Signatures don't match",
    };
  }
};
