//import knex dependency
const knex = require('knex');

//import your knexFile
const knexFile = require('../knexfile');

//target the development property from your knex file
const knexConfig = knexFile.development;

//Make sure to export from your db
module.exports = knex(knexConfig);