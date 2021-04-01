const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Something')
})

app.use('/user', require('./routes/user'))

app.listen(port, () => {
    console.log(`App hosted @ http://localhost:${port}`)
})