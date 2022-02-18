const fs = require("fs");
const express = require("express");

const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public") ;
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    const fileToSend = path.join(__dirname, "views/home.html");
    res.sendFile(fileToSend);
});

app.get("/login", (req, res) => {
    const fileToSend = path.join(__dirname, "views/login.html");
    res.sendFile(fileToSend);
});

app.get("/registro", (req, res) => {
    const fileToSend = path.join(__dirname, "views/register.html");
    res.sendFile(fileToSend);
});

app.listen(8050, () => {
    console.log("Servidor corriendo en http://localhost:8050");
});



