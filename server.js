const express = require('express');
const bodyParser = require('body-parser');
const DBRepository = require("./db/dbrepo");
const cors = require('cors')

const app = express();

const db = new DBRepository();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());

app.get('/list-banks', async (req, res) => {
  const value = await db.listAll();
  res.status(200).send(value);
  console.log(value);
})

app.get('/list-all', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen('1424', () => {
  console.log('Connection on port 1424 successfull!')
})