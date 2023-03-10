import postgres from "postgres";

export default eventHandler(async () => { // eslint-disable-line

    const db = postgres({
        host: process.env.SUPAHOST,
        port: 5432,
        user: process.env.SUPAUSER,
        password: process.env.SUPAPASSWORD,
        database: process.env.SUPANAME
    });

    const data = await db`SELECT * FROM user_accounts`;

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
});

