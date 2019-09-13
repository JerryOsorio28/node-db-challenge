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


//dont forget to export your server
module.exports = server;