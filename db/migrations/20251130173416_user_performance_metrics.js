exports.up = async function (knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    return knex.schema.createTable('user_performance_metrics', (tbl) => {
        tbl.uuid('upm_id')
            .unique()
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'))
        tbl.uuid('user_id')
            .references('user_completed_problems.user_id')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('metric_name').notNullable()
        tbl.float('total_time_ms').notNullable().defaultTo(0)
        tbl.float('num_of_prblms').notNullable().defaultTo(0)
        tbl.float('avg_time_ms').notNullable().defaultTo(0)

        tbl.unique(['user_id', 'metric_name'])
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('user_performance_metrics')
}
