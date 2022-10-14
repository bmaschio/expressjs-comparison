const express = require('express')
const http = require('http')

const app = express()

const port = 8080

app.post('/api/orders' ,(req, res)=>{
    const responseBody= {
        id : 1,
        orderRefCode: "AAAA",
        userId: req.body.userId
    }

    res.status(201).json(responseBody)
} )

app.get('/api/orders/:id' ,(req, res)=>{
    const responseBody= {
        id : parseInt(req.params.id),
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



http.createServer(app).listen(8081 , () => {
    console.log ( `Example Started on http://lacalhost:8081`)
});

app.listen ( port ,()=>{
    
    console.log ( `Example Started on http://lacalhost:${port}`) 
}) 