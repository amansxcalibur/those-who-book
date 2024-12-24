// import { Pool } from "pg";

// let conn;

// if (!conn){
//     conn = new Pool({
//         user:process.env.PSQL_USER,
//         password: process.env.PSQL_PASSWORD,
//         host: process.env.PSQL_HOST,
//         port: process.env.PSQL_PORT,
//         database: process.env.PSQL_DATABASE,
//     })
// }

// export default conn;

import pg from 'pg';

const {Client} = pg;

const client = new Client({
    user: "aman",
    password: "soss",
    host: "127.0.0.1",
    port: 5432,
    database: "ksrtc_db"
})

await client.connect();

export default client;