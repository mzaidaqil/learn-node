const express = require('express')

const app = express()
const morgan = require('morgan')

const logger = require('./logger')
const authorize = require('./authorize')
    // req => middleware => res

//midleware, its not practical to copy and paste into all route

app.use(morgan('tiny'));
app.use(authorize); 

app.get('/', (req,res)=>{
    res.send('Home');
})

app.get('/about', (req,res)=>{
    res.send('About');
})

app.get('/api/products', (req,res)=>{
    res.send('Products');
})

app.get('/api/items', (req,res)=>{
    console.log(req.user)
    res.send('Items');
})

app.listen(3000, ()=>{
    console.log('Server is listening to port 3000')
})

