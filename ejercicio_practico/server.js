import { config } from "dotenv"
import express, {json} from "express"
import path from "path"

import { conectarBase } from "./config/database.js"
import albumRoutes from "./routes/albumRoutes.js"
import artistRoutes from "./routes/artistRoutes.js"
config()

// Conexión Base de Datos
conectarBase()
    .then(() => {
        console.log("Conexión Base de Datos Exitosa")
    })
    .catch((error) => {
        console.error("Error al conectar a la Base de Datos:", error)
        process.exit(1)
    });

// Configuración del servidor
const server = express()
const PORT = process.env.PORT
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));


// Configuración Rutas
server.use(albumRoutes)
server.use(artistRoutes)


server.listen(PORT, () => console.log(`Server running in port ${PORT}`))