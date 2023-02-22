
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");
    // const useRuntimeConfig = require("../../node_modules/nuxt");

    // const config = useRuntimeConfig();

    const db = postgres({
        host: AWSHOST,
        port: AWSPORT,
        user: AWSUSER,
        password: AWSPASSWORD,
        database: AWSDATABASE
    });

    const data = await db`SELECT * FROM account`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};