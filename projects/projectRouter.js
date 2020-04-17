const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

// All GETS
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
    const { id } = req.params;

    Projects.getTasks(id)
    .then(tasks => {
        if(tasks.length){
            res.json(tasks);
        } else {
            res.status(404).json({
                message: 'Could not find any tasks for this id'
            });
        };
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get tasks'
        });
    });
});


router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.getResources(id)
    .then(resources => {
        if(resources.length){
            res.status(200).json(resources);
        } else {
            res.status(404).json({
                message: 'Could not find any resources for this id'
            });
        };
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get resources'
        });
    });
});

// ALL POSTS
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

router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to create new task'
        });
    });
});

router.post('/:id/resources', (req, res) => {
    const resData = req.body;

    Projects.addResource(resData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to create new resource'
        });
    });
 });


 // PUTS
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

router.put('/:id/tasks/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.getById(id)
    .then(task => {
        if(task) {
            Projects.update(changes, id)
            .then(updatedTask => {
                res.json(updatedTask);
            });
        } else {
            res.status(404).json({
                message: 'Could not find task you were looking for'
            });
        };
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to update task'
        });
    });
});

router.put('/:id/resources/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.getById(id)
    .then(resource => {
        if(resource) {
            Projects.update(changes, id)
            .then(updatedResource => {
                res.json(updatedResource);
            });
        } else {
            res.status(404).json({
                message: 'Could not find resource you were looking for'
            });
        };
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to update resource'
        });
    });
});



// DELETES
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