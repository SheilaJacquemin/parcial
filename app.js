//IMPORTAR LAS BIBLIOTECAS
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();

//CONEXIÓN A LA BASE DE DATOS
const dbConnect = require("./src/connection/connection")
dbConnect();

//CONFIGURACIONES
const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

//IMPORTAR RUTAS
app.use(require("./src/routers/tasks.route"));
app.use(require("./src/routers/users.route"));
app.use(require("./src/routers/login"))


app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));