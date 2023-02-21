import postgres from "postgres";

export default async (_nitroApp) => {

    const config = useRuntimeConfig(); // eslint-disable-line no-undef


    console.log("host: ", config.AWSDB_HOST);
    console.log("PW: ", config.AWSDB_PASSWORD);
    const db = postgres({
        host: config.AWSDB_HOST,
        port: "5432",
        user: "master_dev",
        password: config.AWSDB_PASSWORD,
        database: "vue_reference_test1",
    });

    try {
        const data = await db`SELECT * FROM account`;
        console.log("********** SUCCESS");
        console.log("db connected", data);
    } catch (e) {
        console.log("********** ERROR");
        console.log(e);
        console.log(_nitroApp);
    }
    console.log("Nitro Plugin Accessing");
};
