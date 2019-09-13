const db = require('./db-config.js')

module.exports = {
    getProjects,
    getProjectsById
}

function getProjects(){
    return db('projects')
};
function getProjectsById (id) {
    return db('projects').where({ id })
};