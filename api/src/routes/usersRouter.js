const { Router } = require('express');
const {
    getUserHandler,
    getUserIdHanlder,
    postUserHandler,
} = require("../handlers/usersHandlers");
const usersRouter = Router();

usersRouter.get("/", getUserHandler);
usersRouter.get("/:id", getUserIdHanlder);
usersRouter.post("/", postUserHandler);

module.exports = usersRouter;