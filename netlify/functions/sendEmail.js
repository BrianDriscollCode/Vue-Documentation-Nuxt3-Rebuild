
exports.handler = async function (event, context) {  // eslint-disable-line
    const postmark = require("postmark");

    const client = new postmark.ServerClient("8f881a19-5fd3-405e-b22f-30a07dcd9c3e");
    client.sendEmail({
        "From": "brian@vuereference.com",
        "To": "brian@vuereference.com",
        "Subject": "Hello from Postmark",
        "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
        "TextBody": "Hello from Postmark!",
        "MessageStream": "broadcast"
    });


    return {
        statusCode: 200,
        body: JSON.stringify("hello world")
    };
};