
exports.handler = async function (event, context) {  // eslint-disable-line
    const postgres = require("postgres");

    // const db = postgres({
    //     host: process.env.PGHOST,
    //     port: process.env.PGPORT,
    //     user: process.env.PGUSER,
    //     password: process.env.PGPASSWORD,
    //     database: process.env.PGDATABASE
    // });

    const db = postgres({
        host: "vue-reference-test.clphvgvftlzr.us-west-1.rds.amazonaws.com",
        port: 5432,
        user: "master_dev",
        password: "Imcool123!",
        database: "vue_reference_test1"
    });

    const data = await db`SELECT * FROM account`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
};