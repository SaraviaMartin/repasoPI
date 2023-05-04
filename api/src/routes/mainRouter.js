const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
// const postsRouter = require("./postsRouter");


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/users', usersRouter);
// mainRouter.use('/posts', postsRouter);


module.exports = mainRouter;
