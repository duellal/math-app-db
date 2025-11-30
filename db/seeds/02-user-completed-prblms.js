const gen_uuid = require('../helpers/uuid-generator')
const prblm_ids = require('../helpers/problem-uuid-helper')

exports.seed = function (knex) {
    return knex('user_completed_prblms')
        .del()
        .then(async () => {
            return knex('user_completed_prblms').insert([
                {
                    completed_id: '2ad1b9e8-bc88-4d50-b596-a610628d2a5c',
                    user_id: '9641a2d9-e69d-4143-99c2-a306311308ae',
                    prblm_id: prblm_ids.add_1,
                },
                {
                    completed_id: '9641a2d9-e69d-4143-99c2-a306311308ae',
                    user_id: 'e055f023-0c7e-4c34-a4dc-9addc3683def',
                    prblm_id: prblm_ids.add_2,
                },
                {
                    completed_id: 'e055f023-0c7e-4c34-a4dc-9addc3683def',
                    user_id: '2ad1b9e8-bc88-4d50-b596-a610628d2a5c',
                    prblm_id: prblm_ids.add_3,
                },
            ])
        })
}
