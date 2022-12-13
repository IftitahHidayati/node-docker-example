const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
      "message" : "Hallo Iftitah Hidayati, dockerize node js"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})