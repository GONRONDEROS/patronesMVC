const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public") ;
app.use(express.static(publicPath));

const mainRouter = require("./routers/mainRouter");

//Declarando que desde "/" se va a manejar desde mainRouter //
app.use("/", mainRouter);

//Escuchamos al puerto  8050//
app.listen(8050, () => {
    console.log("Servidor corriendo en http://localhost:8050");
});
 


