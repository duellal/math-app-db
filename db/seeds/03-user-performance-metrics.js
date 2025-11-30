exports.seed = function (knex) {
    return knex('user_performance_metrics')
        .del()
        .then(async () => {
            return knex('user_performance_metrics').insert([
                {
                    user_id: '9641a2d9-e69d-4143-99c2-a306311308ae',
                    metric_name: 'add',
                    total_time_ms: 893638,
                    num_of_prblms: 4,
                    avg_time_ms: 223409.5,
                },
                {
                    user_id: 'e055f023-0c7e-4c34-a4dc-9addc3683def',
                    metric_name: 'add',
                    total_time_ms: 7186,
                    num_of_prblms: 1,
                    avg_time_ms: 7186,
                },
            ])
        })
}
