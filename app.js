const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Initial NodeJS App!')
})

app.get('/hello', (req, res) => {
    res.send('Welcome to Helm Practice Talks!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
