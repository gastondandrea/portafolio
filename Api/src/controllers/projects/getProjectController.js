const { Project } = require('../../db');

const getProjectControllerBD = async () => {
    // Trae todos los proyectos de la base de datos
    const allProjectsBD = await Project.findAll({});
    return allProjectsBD;
}

module.exports = getProjectControllerBD;