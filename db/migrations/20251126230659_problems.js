exports.up = async function (knex) {
    return knex.schema.createTable('problems', (tbl) => {
        tbl.uuid('problem_id').unique().primary()
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
