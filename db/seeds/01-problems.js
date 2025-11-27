exports.seed = async function (knex) {
    const { v4: uuidv4 } = await import('uuid')

    await knex('problems').del()

    await knex('problems').insert([
        {
            problem_id: uuidv4(),
            operation: 'add',
            operands: knex.raw(`'[20, 13]'::jsonb`),
            solution: knex.raw(`'33'::jsonb`),
            difficulty: 'easy',
        },
        {
            problem_id: uuidv4(),
            operation: 'add',
            operands: knex.raw(`'[8, 4]'::jsonb`),
            solution: knex.raw(`'12'::jsonb`),
            difficulty: 'easy',
        },
        {
            problem_id: uuidv4(),
            operation: 'add',
            operands: knex.raw(`'[10, 6]'::jsonb`),
            solution: knex.raw(`'16'::jsonb`),
            difficulty: 'easy',
        },
    ])
}
