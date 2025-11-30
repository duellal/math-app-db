const express = require('express')
const router = express.Router()

const { add_user_completed_prblm } = require('../controllers/user_controller')

router.post('/completed_problem', add_user_completed_prblm)

module.exports = router
