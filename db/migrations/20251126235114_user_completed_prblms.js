exports.up = async function (knex) {
    return knex.schema.createTable('user_completed_prblms', (tbl) => {
        tbl.uuid('completed_id').unique().primary()
        tbl.timestamp('completed_at').defaultTo(knex.fn.now())
        tbl.integer('user_id')
        tbl.uuid('prblm_id')

        tbl.unique(['user_id', 'prblm_id'])
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('user_completed_prblms')
}
