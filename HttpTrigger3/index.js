module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('This function is created to test the GitHub Webhooks');

    if(req.body.repository.name){
        context.res = {
            body: `Repository is ${req.body.repository.name}, Event Type is ${req.headers["X-GitHub-Event"]}`
        }
    }else{
        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully."
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }
}