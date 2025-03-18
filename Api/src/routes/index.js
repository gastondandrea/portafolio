const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const projectRouter = require('./projectRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Router PROYECTOS
router.use('/project', projectRouter);


module.exports = router;
