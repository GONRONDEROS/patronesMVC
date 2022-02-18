const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainControllers")

//Si la solicitud es GET y la ruta "/" llamamos a la funcion index de mainController//
router.get("/", mainController.index);

//exportamos el metodo router para que pueda ser usado en nuestra app
module.exports = router;

