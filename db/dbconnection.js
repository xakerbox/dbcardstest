const mysql = require("mysql2");

const connectToDb = async () => {
  const connection = {
    host: "190.92.148.46",
    user: "stuhero",
    database: "cardtrax",
    password: "StuDB!@#$%^2000",
  };

  const pool = mysql.createPool(connection).promise();

  return pool;
};

module.exports = { connectToDb };
