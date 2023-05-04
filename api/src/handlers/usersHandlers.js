const getUserHandler = (req, res) => {
    const {name, apellido} = req.query;

    if(name || apellido)
        return res
            .status(200)
            .send(
                `Encontramos el usuario con el nombre: ${name} y apellido: ${apellido}`
            );
    res.status(200).send("Todos los usuarios");        
};

//params --> /:id
const getUserIdHanlder = (req, res) => {
    const {id} = req.params;
    res.status(200).send(`Usuario con id: ${id}`);
}

// --> body 
const postUserHandler = (req, res) => {
    const {name, email, phone} = req.body;
}