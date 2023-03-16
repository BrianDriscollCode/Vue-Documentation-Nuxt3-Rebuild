import postgres from "postgres";
import { readBody } from "h3";

export default eventHandler(async (event) => { // eslint-disable-line

    const body = await readBody(event);
    const db = postgres({
        host: process.env.SUPAHOST,
        port: 5432,
        user: process.env.SUPAUSER,
        password: process.env.SUPAPASSWORD,
        database: process.env.SUPANAME
    });

    let data;

    try
    {
        data = await db`INSERT INTO course_001_module_completion(id, module_progress)
                       VALUES (${body.user},
            '[{
                "module1":
                    {
                        "section_1": true,
                        "section_2": false
                    },
                "module2":
                    {
                        "section_1": true,
                        "section_2": true,
                        "section_3": false
                    },
                "module3":
                    {
                        "section_1": false,
                        "section_2": false,
                        "section_3": false
                    }
            }]
        ')`;
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    }
    catch(error)
    {
        console.log(error.message);
        return {
            statusCode: 500,
            body: error.message
        };
    }
});
