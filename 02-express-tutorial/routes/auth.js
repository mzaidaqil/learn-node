const express = require('express')

const router = express.Router()

router.post('/login', (req,res) => {
    console.log(req.body)
    const {name} = req.body;
    if(name){
       return res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(400).send('Please provide a name')
    }
})

module.exports = router
