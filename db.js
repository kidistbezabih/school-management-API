const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
  "mysql://avnadmin:AVNS_ztYjq1TWNUD83JdxgXG@mysql-1898ac85-kidistbezabh-02ee.j.aivencloud.com:19715/defaultdb?ssl-mode=REQUIRED"
);

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

module.exports = db;
