//import express dependency
const express = require('express');

//assign express dependency to your server
const server = express();

//teach express how to parse the data of the body to json
server.use(express.json())

//import endpoints router
const projectEndpoints = require('./data/endpoints/projectEndpoints');

//have server use your endpoints
server.use('/api/projects', projectEndpoints)

//testing server
server.get('/', (req, res) => {
    res.send('Server is up and running')
})


//Middleware to convert boolean value to true/false
// const CompletedOrNot = (req, res, next) => {
//     if (req.body.completed === 1){
//         req.body.completed = true
//     } else if (!req.body.completed){
//         next();
//     } 
//     else {
//         req.body.completed = false
//     }
// }

//dont forget to export your server
module.exports = server;