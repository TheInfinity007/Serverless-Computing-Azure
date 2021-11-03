module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('This function is created to test the GitHub Webhooks');

    if (req.body.pages[0].title){
        context.res = {
            body: "Page is " + req.body.pages[0].title + ", Action is " + req.body.pages[0].action + ", Event Type is " + req.headers['x-github-event']
        };
    }
    else {
        context.res = {
            status: 400,
            body: ("Invalid payload for Wiki event")
        };
    }

}