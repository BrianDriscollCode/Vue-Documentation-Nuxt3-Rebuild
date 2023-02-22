
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");
    // const useRuntimeConfig = require("../../node_modules/nuxt");

    // const config = useRuntimeConfig();

    const db = postgres({
        host: process.env.AWSHOST,
        port: process.env.AWSPORT,
        user: process.env.AWSUSER,
        password: process.env.AWSPASSWORD,
        database: process.env.AWSDATABASE
    });

    const data = await db`SELECT * FROM account`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};