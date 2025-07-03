import { Pool } from "pg";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER} from "./config.js";

export const db = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT
})