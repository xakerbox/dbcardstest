const { connectToDb } = require("./dbconnection");

class DBRepository {
  async connect() {
    const pool = await connectToDb();
    return pool;
  }

  async listAll() {
    const pool = await this.connect();
    const [data] = await pool.query("SELECT * FROM cards");
    pool.end();
    return data;
  }
}

module.exports = DBRepository;
