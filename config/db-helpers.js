const db = require('./db-config.js')

module.exports = {
    getProjects,
    getProjectById,
    getTasks,
    getResources,
    addProject
}

function getProjects(){
    return db('projects')
};

function getProjectById (id) {
    return db('projects')
        .where({ id })
        .first()
};

function getTasks (id) {
    return db('projects as p')
        .join('tasks as t', 'p.id', 't.project_id')
        .where({ project_id: id })
        .select('p.project_name', 'p.project_description', 't.description', 't.notes', 't.completed')
};

function getResources () {
    return db('resources')
};

function addProject (data) {
    return db('projects')
    .insert(data)
};