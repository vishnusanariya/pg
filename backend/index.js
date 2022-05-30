const ConnectToMongo = require("./db");

ConnectToMongo();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(require('./routes/auth'));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/login', (req, res) => {
  res.send('Hello Login!')
})
app.get('/signup', (req, res) => {
  res.send('Hello sign up!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
