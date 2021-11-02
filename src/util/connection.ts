import { env } from "node:process";

const mysql = require('mysql2');
export class MysqlConn {
    public static getConnection() {
        return mysql.createPool({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database
        
        });
    }
}

