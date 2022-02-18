const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainControllers")

//Si la solicitud es GET y la ruta "/" llamamos a la funcion home de mainController//
router.get("/", mainController.home);

//Si la solicitud es GET y la ruta "/" llamamos a la funcion about de mainController//
router.get("/about", mainController.about);

//exportamos el metodo router para que pueda ser usado en nuestra app
module.exports = router;

