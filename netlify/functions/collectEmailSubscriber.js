
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


    let { data } = await axios.get(url, config);

    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    };
};