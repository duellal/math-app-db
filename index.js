// Imports
const express = require('express')
const cors = require('cors')

// Endpoint Imports
const addRoutes = require('./api/routes/add_routes')

const middleware = [cors(), express.json()]

const app = express()
const PORT = process.env.PORT || 8001

app.use(middleware)

// Server connection
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
})

// Health endpoint:
app.get('/api/health', (req, res) => {
    res.status(200).json({
        message: 'Math Problem Generator - Health check point complete',
    })
})

// Routes
app.use('/api/add', addRoutes)
