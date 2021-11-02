"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConn = void 0;
const mysql = require('mysql2');
class MysqlConn {
    static getConnection() {
        return mysql.createPool({
            host: '	localhost',
            user: 'coopkhpm_kasun',
            password: '	kasun@#321#1994',
            database: 'coopkhpm_woodparadise'
        });
    }
}
exports.MysqlConn = MysqlConn;
//# sourceMappingURL=connection.js.map