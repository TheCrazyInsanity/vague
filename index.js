const express = require('express')
const app = express()
const port = 8089

//Route imports
const homeserver = require('./routes/homeserver/index.js')

app.use('/homeserver', homeserver)

app.get('/', (req, res) => {
  res.send(`Hey! This is a server for project cord cutter. Accessing this page with your browser won't do anything. Try using your preferred client!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})