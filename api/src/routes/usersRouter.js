const {Router} = require('express');
const {
    getUserHandler,
    getUserIdHanlder,
    postUserHandler,
} = require("../handlers/usersHandlers");
const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.get("/:id", getUserIdHanlder);
userRouter.post("/", postUserHandler);

module.exports = userRouter;