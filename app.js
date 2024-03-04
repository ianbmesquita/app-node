const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Initial NodeJS App!')
})

app.get('/v2', (req, res) => {
    res.send('Welcome to v2 route!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})