const express = require('express')
const router = require('./src/routes/routes')
const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.debug('Server running at localhost:3000')
})