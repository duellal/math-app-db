const axios = require('axios')
const db = require('../../db/db-config')

const add_user_completed_prblm = async (req, res) => {
    const { answer, user_id, problem_id } = req.body

    if (!answer || !user_id || !problem_id) {
        let keys_given = Object.keys(req.body).filter((elem) => !req.body[elem])

        return res.status(400).json({
            message: `Answer, user id, and problem id keys must be in the req.body. You gave the following keys: ${keys_given}.`,
        })
    }

    let correct = await db('problems')
        .where({ problem_id })
        .select('*')
        .first()
        .then((prob) => prob.solution === answer)

    await db('user_completed_problems')
        .insert({ user_id, problem_id, correct })
        .returning('*')
        .then((data) => {
            return res.status(201).json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
}

const get_user_completed_prblm = async (req, res) => {}

module.exports = {
    add_user_completed_prblm,
    get_user_completed_prblm,
}
