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
                    operands: knex.raw(`'[8, 4]'::jsonb`),
                    solution: knex.raw(`'12'::jsonb`),
                    difficulty: 'easy',
                },
                {
                    problem_id: prblm_ids.add_3,
                    operation: 'add',
                    operands: knex.raw(`'[10, 6]'::jsonb`),
                    solution: knex.raw(`'16'::jsonb`),
                    difficulty: 'easy',
                },
            ])
        })
}
