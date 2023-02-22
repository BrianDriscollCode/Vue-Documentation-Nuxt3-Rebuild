
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");
    // const useRuntimeConfig = require("../../node_modules/nuxt");

    // const config = useRuntimeConfig();

    const db = postgres({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    });

    const data = await db`SELECT * FROM account`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};