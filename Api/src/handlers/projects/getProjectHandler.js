const getProjectControllerBD = require('../../controllers/projects/getProjectController');

// Devuelve todos los proyectos de la BDD
const getProjectHandler = async (req, res) => {
    try {
        // Obtener datos de la BDD
        const allProjectsBD = await getProjectControllerBD();
        res.status(200).json(allProjectsBD);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProjectHandler;