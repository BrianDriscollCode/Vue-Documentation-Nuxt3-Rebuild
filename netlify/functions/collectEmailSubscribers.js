
exports.handler = async function (event, context) {  // eslint-disable-line
    const axios = require("axios");

    const apiToken = process.env.MAILER_LITE_TOKEN;

    const url = "https://connect.mailerlite.com/api/subscribers";
    const config = {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${apiToken}`
        }
    };

    console.log(event.queryStringParameters.email, " *****************" ); // eslint-disable-line

    const data = {
        "email": event.queryStringParameters.email,
        "fields": {
            "name": event.queryStringParameters.name
        }
    };

    await axios.post(url, data, config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return {
        statusCode: 200
    };
};