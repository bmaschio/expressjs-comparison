const express = require('express')
const http = require('http')
const { validationResult , param , query , checkSchema } = require('express-validator')

const app = express()

app.use(express.json());

const port = 8080

const users ={ }




app.get('/api/users/:username' ,(req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    if (users[req.params.username]){

        res.status(200).json(users[req.params.username])
    }else{
        res.status(404).json(req.params.username)
    }
} ,  )



app.get('/api/users' , query('minKarma').isNumeric(),(req, res)=>{


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   let i = 0
   let usernames = []
   for (username in users){
      
    if((req.query.minKarma) && ( req.query.minKarma < users[username].karma  )){
       usernames.push(users[username])
    }

   }
   const responseBody ={}
   if ( usernames.length != 0){
    responseBody[usernames]= usernames

   }


    
    res.status(200).json(responseBody)
} )




app.listen ( port ,()=>{
    
    users["john"] ={name: "John Doe" , email : "john@doe.com" , karma:4 }
    users["jane"] ={name: "Jane Doe" , email : "jane@doe.com" , karma:6 }
    console.log ( `Example Started on http://lacalhost:${port}`) 
}) 