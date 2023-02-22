
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");
    // const useRuntimeConfig = require("../../node_modules/nuxt");

    // const config = useRuntimeConfig();

    const db = postgres({
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE
    });

    const data = await db`SELECT * FROM account`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};