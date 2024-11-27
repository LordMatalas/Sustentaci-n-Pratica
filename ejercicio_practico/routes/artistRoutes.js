import { Router } from "express";
import { crearDatos, obtenerDatos } from "../controller/artistController.js";
const router = Router()

router.get('/Artistas', obtenerDatos)
router.post('/Artistas', crearDatos)


export default router;