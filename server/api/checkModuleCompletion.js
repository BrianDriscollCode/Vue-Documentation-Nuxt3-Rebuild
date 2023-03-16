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

    try
    {
        const data = await db`SELECT id, module_progress FROM course_001_module_completion WHERE id = ${body.user}`;
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    }
    catch (error)
    {
        return {
            statusCode: 500,
            body: JSON.stringify(error.message)
        };
    }
});
