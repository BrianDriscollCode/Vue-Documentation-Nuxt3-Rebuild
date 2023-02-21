import postgres from "postgres";

const config = useRuntimeConfig(); // eslint-disable-line no-undef

const db = postgres({
    host: config.PGHOST,
    port: config.PGPORT,
    user: config.PGUSER,
    password: config.PGPASSWORD,
    database: config.PGDATABASE
});

export default db;