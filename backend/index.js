const ConnectToMongo = require("./db");
// const cors=require("cors");
ConnectToMongo();
const express = require('express')
const app = express()
const port = 5000
const SECRET_KEY='payingguestrentalsystemprojectinmernstack';
var cors = require('cors');
// const cookieParser=require('cookie-parser');

app.use(cors());
// app.use(cookieParser(SECRET_KEY));
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
