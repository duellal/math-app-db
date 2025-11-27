const add_prblms = require('../helpers/problem-uuid-helper')

exports.seed = async function (knex) {
    await knex('problems').del()

    await knex('problems').insert([
        {
            completed_id: add_prblms.add_1,
            user_id: 1,
            prblm_id: '',
        },
        {
            completed_id: add_prblms.add_2,
            user_id: 1,
            prblm_id: '',
        },
        {
            completed_id: add_prblms.add_3,
            user_id: 2,
            prblm_id: '',
        },
    ])
}
