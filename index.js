const express = require('express')
const app = express()
const port = 2000
const config = require('./config/database')
const routes = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use('/api', routes)

app.listen(port, () => {
  console.log('Server is running at port: ' + port)
})
