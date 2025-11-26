exports.seed = async function (knex) {
    await knex('problems').insert([{}])
}
