import postgres from "postgres";

export default eventHandler(async () => { // eslint-disable-line

    const db = postgres({
        host: process.env.AWSHOST,
        port: 5432,
        user: process.env.AWSUSER,
        password: process.env.AWSPASSWORD,
        database: process.env.AWSDATABASE
    });

    const data = await db`SELECT * FROM user_accounts`;

    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
});