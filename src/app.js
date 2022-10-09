//IMPORTAR LAS BIBLIOTECAS
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

require("dotenv").config();

const app = express()

//CONEXIÓN A LA BASE DE DATOS
const dbConnect = require("./connection/connection")
dbConnect()

//CONFIGURACIONES
const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))

//IMPORTAR RUTAS
app.use(require("./components/routers/tasks.route"));
app.use(require("./components/routers/users.route"));


app.listen(port, ()=> console.log(`Servidor corriendo en http://localhost:${port}`));