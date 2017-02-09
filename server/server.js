const express = require('express')
const app = express()

const { allDocRoutes } = require('./src/routes')
const PouchDB = require('pouchdb')
const DB = new PouchDB('http://127.0.0.1:5984/test-server')
app.use('/api/all', allDocRoutes(DB))

app.listen(process.env.PORT || 8000, () => {
  console.log("App on port 8000")
})
