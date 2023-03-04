
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");

    const db = postgres({
        host: process.env.SUPAHOST,
        port: 5432,
        user: process.env.SUPAUSER,
        password: "Lfifteenf123!#",
        database: process.env.SUPANAME
    });

    const data = await db`SELECT * FROM user_accounts`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};