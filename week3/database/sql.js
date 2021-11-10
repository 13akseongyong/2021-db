// import mysql from "mysql2";

const mysql = require('mysql2');

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    // host: "localhost",
    host:'127.0.0.1',
    user: 'root',
    database: 'dbdesign',
    password: 'phs31310',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
const promisePool = pool.promise();
const sql = {

  getUsers: async () => {
    const [rows] = await promisePool.query(`
SELECT * FROM student
`)
    return rows;
  },
};


module.exports = sql;
