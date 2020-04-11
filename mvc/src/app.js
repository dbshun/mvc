const express = require('express')
const {
  getAccount,
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount
} = require('./controller')

const app = express()
app.locals.dataFilePath = "./data.json"

const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>Hi, Welcome!</h1>'))

app.get("/accounts/:id", getAccount)
app.get("/accounts", getAllAccounts)

app.post("/accounts", createAccount)

app.put("/accounts", updateAccount)

app.delete("/accounts/:id", deleteAccount)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.app = app
