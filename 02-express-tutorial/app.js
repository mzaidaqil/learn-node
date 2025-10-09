const express = require('express')

const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static asset
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended : false}))
//parse json
app.use(express.json())

//people routes
app.use('/api/people', people)
//auth routes
app.use('/api/auth', auth)

app.listen(3000, ()=>{
    console.log('Server is listening to port 3000')
})

