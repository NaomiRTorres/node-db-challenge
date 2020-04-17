const db = require('.././data/db-config.js');

module.exports = {
    get,
    getById,
    getTasks,
    getResources,
    add,
    addTask,
    addResource,
    update,
    remove
}

function get() {
    return db('projects');
}

function getById(id) {
    return db('projects')
    .where({ id })
    .first();
}

function getTasks(id) {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.task_description', 'p.project_name as name')
    .where('t.project_id', id);
}

function getResources(id){
    return db('resources as r')
    .join('project as p', 'p.id', 'r.resource_project_id')
    .select('r.id', 'r.resource_name', 'p.project_name as name')
    .where('r.resource_project_id', id);
}

function add(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return getById(ids[0]);
    });
}

function addTask(){}

function addResource(){}

function update(changes, id) {
    return db('projects')
    .where({ id })
    .update(changes)
    .then(() => {
        return getById(id)
    });
}

function remove(id) {
    return db('projects')
    .where({ id })
    .del();
}