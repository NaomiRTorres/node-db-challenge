const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();


router.get('/',( req, res) => {
    Projects.get()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get projects'
        });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.getById(id)
    .then(project => {
        if(project) {
            res.json(project);
        } else {
            res.status(404).json({
                message: 'Could not find project by that id'
            });
        };
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get schemes'
        });
    });
});

router.get('/:id/tasks', (req, res) => {

})

router.get('/:id/resources', (req, res) => {

})


router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to create new project'
        });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.getById(id)
    .then(project => {
        if (project) {
            Projects.update(changes, id)
            .then(updatedProject => {
                res.json(updatedProject);
            });
        } else {
            res.status(404).json({
                message: 'Could not find project with given id'
            });
        }; 
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to update project'
        });
    });
});

router.delete(':id', (req, res) => {
    const { id } = req.params;

    Projects.remove(id)
    .then(deleted => {
        if(deleted){
            res.status({ removed: deleted });
        } else {
            res.status(404).json({
                message: 'Could not find project with given id'
            });
        };    
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to delete project'
        });
    });
});


module.exports = router;