const router = require('express').Router()
const { map, prop } = require('ramda')

module.exports = (DB) => {

  //***/api/all
  router.route('/')
    .get((req, res) => {
      return DB.allDocs({include_docs: true}).then(doc => {
        const data = map(row => prop('doc', row), prop('rows', doc))
        res.status(200).json(data)
      })
      .catch(err => {
        console.log("Error", err)
      })
    })

  return router
}
