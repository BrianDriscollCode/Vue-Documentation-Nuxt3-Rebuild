import postgres from "postgres";

const config = useRuntimeConfig(); // eslint-disable-line no-undef

const db = postgres({
    host: config.AWSDB_HOST,
    port: "5432",
    user: "master_dev",
    password: config.AWSDB_PASSWORD,
    database: "vue_reference_test1",
});

module.exports = db;