const express = require('express')
const router = express.Router()

//Subroutes
const test = require('./test/index.js')

router.use('/test', test)

//Return generic homeserver info, name, id, features, etc.
router.get('/', (req, res) => {
    res.send('Not implemented yet.')
})

module.exports = router