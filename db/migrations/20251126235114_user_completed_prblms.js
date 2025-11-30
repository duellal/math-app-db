exports.up = async function (knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    return knex.schema.createTable('user_completed_problems', (tbl) => {
        tbl.uuid('completed_id')
            .unique()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'))
        tbl.timestamp('completed_at').defaultTo(knex.fn.now())
        tbl.uuid('user_id').primary().unique().notNullable()
        tbl.uuid('problem_id')
            .references('problems.problem_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable()
        tbl.boolean('correct').defaultTo(true)
        tbl.unique(['user_id', 'problem_id'])
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('user_completed_problems')
}
