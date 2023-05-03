const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("../routes/usersRouter");
const postsRouter = require("../routes/postsRouter");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
