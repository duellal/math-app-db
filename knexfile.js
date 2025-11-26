module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        database: 'math-practice-app',
    },
}
