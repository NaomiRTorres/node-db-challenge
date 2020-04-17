const express = require('express');

const ProjectRouter = require('../projects/projectRouter');

const server = express();

server.use(express.json());

server.unsubscribe('/api/projects', ProjectRouter);

module.exports = server;
