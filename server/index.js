import postgres from "postgres";

export default async (_nitroApp) => { // eslint-disable-line

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

    return db;
};