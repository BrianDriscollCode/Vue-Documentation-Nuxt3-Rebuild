import postgres from "postgres";

export default async (_nitroApp) => { // eslint-disable-line

    const config = useRuntimeConfig(); // eslint-disable-line no-undef

    const db = postgres({
        host: config.PGHOST,
        port: config.PGPORT,
        user: config.PGUSER,
        password: config.PGPASSWORD,
        database: config.PGDATABASE,
    });

    return db;
};