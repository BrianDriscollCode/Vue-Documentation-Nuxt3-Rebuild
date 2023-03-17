import postgres from "postgres";
import { readBody } from "h3";

export default eventHandler(async (event) => { // eslint-disable-line

    const body = await readBody(event);
    console.log(body.user);
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

