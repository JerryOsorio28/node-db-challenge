//import your env file asap in your code
require('dotenv').config();

//import your server
const server = require('./server');

//import your default directory
const defaults = require('./config/defaults');

//create your dynamic port
const port = defaults.port;

//have the server listening in dynamic port
server.listen(port, () => console.log(`Server running on port ${port}`))