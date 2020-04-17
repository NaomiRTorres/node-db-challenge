const db = require('.././data/db-config.js');

module.exports = {
    get,
    getById,
    getTasks,
    getResources,
    add,
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

function getTasks() {}

function getResources(){}

function add(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return getById(ids[0]);
    });
}

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