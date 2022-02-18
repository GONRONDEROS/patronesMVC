const path = require("path");

const mainController = {
    //Funcion que devuelve una rta para la pagina home//
    index: (req, res) => {
        const fileToSend = path.join(__dirname, "../views/home.html");

    res.sendFile(fileToSend);
    },
};

//exportamos el objeto controlador
module.exports = mainController;

