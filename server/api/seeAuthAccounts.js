import postgres from "postgres";

export default eventHandler(async () => { // eslint-disable-line

    const db = postgres({
        host: process.env.SUPAHOST,
        port: 5432,
        user: process.env.SUPAUSER,
        password: process.env.SUPAPASSWORD,
        database: process.env.SUPANAME
    });

    console.log("test");

    const data = await db`SELECT * FROM auth.users`;

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
});