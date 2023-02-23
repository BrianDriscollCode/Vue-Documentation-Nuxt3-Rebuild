
exports.handler = async (event, context) => {  // eslint-disable-line
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

    const userData = {
        "email": event.queryStringParameters.email,
        "fields": {
            "name": event.queryStringParameters.name
        }
    };

    try {
        const { data } = await axios.post(url, userData, config);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log(error.response.data, "ERROR");
        return {
            statusCode: 200,
            body: JSON.stringify({status: "failure"}),
        };
    }
};