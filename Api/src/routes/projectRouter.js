const { Router } = require('express');
const projectRouter = Router();

// import hadlers
const getProjectHandler = require('../handlers/projects/getProjectHandler');

// use handlers
projectRouter.get("/", getProjectHandler);

module.exports = projectRouter;