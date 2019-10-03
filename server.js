const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(express.static('www'))

app.listen(3000, () => console.log(`Phoney Server is on port 3000`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './www/index.html'))
})
