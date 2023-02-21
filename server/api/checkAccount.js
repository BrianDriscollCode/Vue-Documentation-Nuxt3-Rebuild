import postgres from "postgres"; // eslint-disable-line no-unused-vars
import db from "../AWS_CONNECTION";

export default defineEventHandler(async () => { // eslint-disable-line no-undef

    try {
        return await db`SELECT * FROM account`;
    } catch (e) {
        console.log(e);
    }
});