import pg from "pg";
const {Pool} = pg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool( {
    host : process.env.PGHOST,
    port : process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    ssl:true
});



export default pool;