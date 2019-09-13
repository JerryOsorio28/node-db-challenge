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

    const { id } =  req.params;

    Projects.getProjectsById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})
router.get('/', (req, res) => {

    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})



module.exports = router;