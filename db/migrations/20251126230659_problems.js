exports.up = async function (knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    return knex.schema.createTable('problems', (tbl) => {
        tbl.uuid('problem_id')
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'))
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.enu('operation', ['add', 'subtract', 'multiply', 'divide'])
        tbl.jsonb('operands')
        tbl.jsonb('solution')
        tbl.enu('difficulty', ['easy', 'medium', 'hard'])
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('problems')
}
