module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const model = req.query.model;
  context.log("model = ", req.query);

  if (model != null) {
    const watchInfo = {
      Manufacturer: "abc",
      CaseType: "Solid",
      Bezel: "Titanium",
      Dial: "Roman",
      CaseFinish: "Silver",
      Jewels: 15,
    };

    return context.res = {
      status: 200,
      body: `Watch Details: ${watchInfo.Manufacturer}, ${watchInfo.CaseType}, ${watchInfo.Bezel}, ${watchInfo.Dial}, ${watchInfo.CaseFinish}, ${watchInfo.Jewels}`,
    };
  }

  context.res = {
    status: 400 /* Defaults to 200 */,
    body: "Please provide a watch model in the query string",
  };
};
