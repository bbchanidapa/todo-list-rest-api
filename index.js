const express = require('express')
const app = express()
const  { getLists } = require('./config.js')

app.get('*', (req, res) => {
  getLists(req.path).then((data) => {
    if(data.code === 200) res.status(200).send(data)
    else if(data.code === 404) res.status(404).send(data)
  })
})


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})