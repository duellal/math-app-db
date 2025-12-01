const prblm_ids = require('../helpers/problem-uuid-helper')

exports.seed = function (knex) {
    return knex('problems')
        .del()
        .then(() => {
            return knex('problems').insert([
                {
                    problem_id: prblm_ids.add_1,
                    operation: 'add',
                    operands: knex.raw(`'[20, 13]'::jsonb`),
                    solution: knex.raw(`'33'::jsonb`),
                    difficulty: 'easy',
                },
                {
                    problem_id: prblm_ids.add_2,
                    operation: 'add',
                    operands: knex.raw(`'[2000, 4, 60]'::jsonb`),
                    solution: knex.raw(`'2064'::jsonb`),
                    difficulty: 'easy',
                },
                {
                    problem_id: prblm_ids.add_3,
                    operation: 'add',
                    operands: knex.raw(
                        `'[100000, 6, 100, 1000, 10000, 10]'::jsonb`,
                    ),
                    solution: knex.raw(`'111116'::jsonb`),
                    difficulty: 'easy',
                },
            ])
        })
}
