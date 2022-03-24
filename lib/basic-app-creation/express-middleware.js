//This basically shows how to use middleware in nodejs
const http = require('http');

const express = require('express');

const app = express();

//Use allow us to add middleware
app.use( (req,res,next) =>{
    console.log("In the middleware")
    next(); //Allow us to continue to the next middleware.
} );

app.use( (req,res,next) =>{
    console.log("In another middleware")

} );

const server = http.createServer(app);

server.listen(3000);