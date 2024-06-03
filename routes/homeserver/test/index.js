const express = require('express')
const router = express.Router()

//Return generic homeserver info, name, id, features, etc.
router.get('/', (req, res) => {
    res.send('test')
})

module.exports = router