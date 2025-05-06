const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql24",
  database: "DB",
  port: 3306,
});
db.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("connected to DB");
});

module.exports = db;
