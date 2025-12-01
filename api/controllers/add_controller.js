const axios = require('axios')
const db = require('../../db/db-config')

const add_addition_prblm = async (req, res) => {
    const { count, format, range, round_to, difficulty } = req.body

    let problem = await axios
        .post(
            'http://localhost:8000/api/add',
            {
                count,
                format,
                range,
                round_to,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
        .then((res) => res.data)
        .catch((err) => {
            return res.status(500).json(err)
        })

    console.log('Problem:', problem)
    let { operands, solution } = problem

    let insert = await db('problems')
        .insert({
            operands: JSON.stringify(operands),
            solution: JSON.stringify(solution),
            difficulty,
            operation: 'add',
        })
        .returning('*')

    return res.status(200).json(insert)
}

const add_addition_prblm_set = async (req, res) => {
    const { prblm_count, format, num_per_prblm, range, round_to, difficulty } =
        req.body

    let problems = await axios
        .post(
            'http://localhost:8000/api/add/set',
            {
                prblm_count,
                format,
                range,
                round_to,
                num_per_prblm,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
        .then((res) => {
            res.data.forEach((prob) => {
                prob.difficulty = difficulty
                prob.operation = 'add'
                prob.operands = JSON.stringify(prob.operands)
                prob.solution = JSON.stringify(prob.solution)
            })

            return res.data
        })
        .catch((err) => {
            return res.status(500).json(err)
        })

    let insert = await db('problems').insert(problems).returning('*')

    return res.status(200).json(insert)
}

const get_add_prblms = async (req, res) => {
    const { limit, offset, difficulty, operation, user_id } = req.query
    let query = db('problems')

    if (user_id) {
        query = db('problems').whereNotIn('problem_id', function () {
            this.select('problem_id')
                .from('user_completed_problems')
                .where('user_id', user_id)
                .andWhere('correct', true)
        })
    }
    if (difficulty) {
        query = query.where({ difficulty })
    }
    if (operation) {
        query = query.where({ operation })
    }

    return res.status(200).json(await query.limit(limit).offset(offset))
}

module.exports = {
    add_addition_prblm,
    add_addition_prblm_set,
    get_add_prblms,
}
