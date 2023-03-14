import { $fetch } from "ofetch";
import { readBody } from "h3";

export default eventHandler(async (event) => { // eslint-disable-line

    console.log("test");
    const apiToken = process.env.MAILER_LITE_TOKEN;
    const body = await readBody(event);

    const url = "https://connect.mailerlite.com/api/subscribers";
    const config = {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${apiToken}`
        }
    };

    const userData = {
        "email": body.email,
        "fields": {
            "name": body.name
        }
    };

    try {
        const { data } =  await $fetch(url, {
            method: "POST",
            body: userData,
            headers: config.headers
        });
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    }
    catch (error) {
        console.log(error);
        return {
            statusCode: 200,
            body: JSON.stringify("fail")
        };
    }
});