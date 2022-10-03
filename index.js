const DBRepository = require("./db/dbrepo");

const db = new DBRepository();

const main = async () => {
  const data = await db.listAll();
  console.log(data);
};

main();
