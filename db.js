import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "moscenterspb.space",
    user: "u1729921_root",
    password: "root_123",
    database: "u1729921_testtask",
});

export default connection;