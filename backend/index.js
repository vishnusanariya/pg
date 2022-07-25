const ConnectToMongo = require("./db");
// const cors=require("cors");
ConnectToMongo();
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'));
app.get('/signin', (req, res) => {
  res.send('Hello Login!')
})
app.get('/register', (req, res) => {
  res.send('Hello sign up!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
