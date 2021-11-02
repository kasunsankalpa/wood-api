"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConn = void 0;
const mysql = require('mysql2');
class MysqlConn {
    static getConnection() {
        return mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'my_nestjs_project'
        });
    }
}
exports.MysqlConn = MysqlConn;
//# sourceMappingURL=connection.js.map