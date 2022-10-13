const express = require('express')

const app = express()

const port = 8080

app.post('/api/orders/:id' ,(req, res)=>{
    const responseBody= {
        id : 1,
        orderRefCode: "AAAA",
        userId: req.body.userId
    }

    res.status(201).json(responseBody)
} )

app.get('/api/orders/:id' ,(req, res)=>{
    const responseBody= {
        id : 1,
        orderRefCode: "AAAA",
        userId: 'usr01'
    }

    res.status(200).json(responseBody)
} )

app.get('/api/orders' ,(req, res)=>{


    const responseBody= {
        id : 1,
        orderRefCode: "AAAA", 
        userId: req.query.userId
    }

    res.status(200).json(responseBody)
} )

app.listen ( port ,()=>{
  console.log ( `Example Started on http://lacalhost:${port}`) 
}) 