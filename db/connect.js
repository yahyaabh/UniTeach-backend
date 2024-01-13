import pg from "pg";
const {Client} = pg;
import dotenv from "dotenv";
dotenv.config();

const client = new Client( {
    host : process.env.PGHOST,
    port : process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
});



export default client;