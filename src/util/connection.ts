import { env } from "node:process";

const mysql = require('mysql2');
export class MysqlConn {
    public static getConnection() {
        return mysql.createPool({
            host: '	localhost',
            user: 'coopkhpm_kasun',
            password: '	kasun@#321#1994',
            database: 'coopkhpm_woodparadise'
        
        });
    }
}

