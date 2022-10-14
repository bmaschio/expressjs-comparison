## Starting up

You need to first  install your packages

`npm install`

once  installed all the packages to start the application 

`npm run dev`



## Code 

Let's look into the structure of the code 

```js
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

```



the first line is the import of the express framework

```js
const express = require('express')
```

the second line instantiate the effective express app

```js
const app = express()
```

To make the basic app listen to a specific port we need to assign a specific port to the the application , there are two ways to do so  the first one we use 

`http.createServer([options][, requestListener])`  ,  the express app acts as request listener , it is also possible to set server specific parameters

In the the callback function is possible to execute  any sort of initialization code or report server startup error 

```js
http.createServer(app).listen(8081 , () => {
    console.log ( `Example Started on http://lacalhost:8081`)
});
```

The second way uses an express convenience method that has as result  the creation of HTTP server listening to 8080

 ```js
app.listen ( port ,()=>{
    console.log ( `Example Started on http://lacalhost:${port}`) 
}) 
 ```

Previously we have said that express app as request listener to so it has a series of method on for each of the HTTP verbs

In the first example the server will accept call at `'/api/orders'` with the verb POST , in the call back function we can notice the extraction of one of the element in the body  to be returned  

```js
app.post('/api/orders' ,(req, res)=>{
    const responseBody= {
        id : 1,
        orderRefCode: "AAAA",
        userId: req.body.userId
    }

    res.status(201).json(responseBody)
} )
```

We can set the response using specific method to set the status the and response content via other methods



In the second handler 


```js
app.get('/api/orders/:id' ,(req, res)=>{
    const responseBody= {
        id : parseInt(req.params.id),
        orderRefCode: "AAAA",
        userId: 'usr01'
    }

    res.status(200).json(responseBody)

} )
```

we define a get with a path parameters that can be used in function `req.params.id`  

The last example 

```js
app.get('/api/orders' ,(req, res)=>{


    const responseBody= {
        id : 1,
        orderRefCode: "AAAA", 
        userId: req.query.userId
    }

    res.status(200).json(responseBody)
} )
```

we can access to the query parameter via `req.query.userId`