const express = require('express')
const router = express.Router()

const {
    add_addition_prblm,
    add_addition_prblm_set,
    get_all_add_prblms,
} = require('../controllers/add_controller')

router
    .get('/', get_all_add_prblms)
    .post('/', add_addition_prblm)
    .post('/set', add_addition_prblm_set)

module.exports = router
