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
    let jsonBObject = "{0, "  + body.module + "," + body.section + "}";
    console.log(jsonBObject);

    try
    {
        data = await db`UPDATE course_001_module_completion
		SET module_progress = jsonb_set(
		  module_progress::jsonb,
		  ${jsonBObject},
		  'true'::jsonb
		)::json
		WHERE id = ${body.user};`;
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


//Example of the edit query

// UPDATE course_001_module_completion
// SET module_progress = jsonb_set(
//   module_progress::jsonb,
//   '{0,module1,section_1}',
//   'false'::jsonb
// )::json
// WHERE id = ${body.user};