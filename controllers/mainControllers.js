const path = require("path");

const mainController = {
    //Funcion que devuelve una rta para la pagina home//
    home: (req, res) => {
        const fileToSend = path.join(__dirname, "../views/home.html");

    res.sendFile(fileToSend);
    },
    about: (req, res) => {
        const fileToSend = path.join(__dirname, "../views/about.html");

    res.sendFile(fileToSend);
    }
};

//exportamos el objeto controlador
module.exports = mainController;

