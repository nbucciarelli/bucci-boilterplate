const PouchDB = require('pouchdb')
const DB = new PouchDB('http://127.0.0.1:5984/test-server')
const seedData = require(`./seedData`)
const { map, prop } = require('ramda')
const { handleError } = require('../src/helpers/Utilities')

const removeDocs = doc => {
  return map(doc => {
    return DB.remove(_doc.doc._id, _doc.doc._rev)
  }, prop('rows', doc))
}

const createDocs = () => {
  return map(obj => DB.post(obj), seedData)
}

DB.allDocs({include_docs: true})
.then(removeDocs)
.then(createDocs)
.catch()
