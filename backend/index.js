const ConnectToMongo = require("./db");
// const cors=require("cors");
ConnectToMongo();
const express = require('express')
const app = express()
const port = 5000
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   credentials: true
// }
// app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./routes/auth'));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/signin', (req, res) => {
  res.send('Hello Login!')
})
app.get('/register', (req, res) => {
  res.send('Hello sign up!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
