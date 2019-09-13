const express = require('express');

const Projects = require('../../config/db-helpers');

const router = express.Router();


//<----------GET REQUESTS---------------------

router.get('/', (req, res) => {

    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})

router.get('/:id', (req, res) => {

    const { id } = req.params; 

    Projects.getProjectById(id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})
router.get('/:id/tasks', (req, res) => {

    const { id } = req.params;

    Projects.getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})
router.get('/:id/resources', (req, res) => {

    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})

//<----------POST REQUESTS---------------------

router.post('/', (req, res) => {

    const projectData = req.body;

    Projects.addProject()
    .insert(projectData)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json(err.response)
    })
})



module.exports = router;