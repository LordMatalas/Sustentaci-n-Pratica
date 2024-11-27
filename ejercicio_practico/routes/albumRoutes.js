import { Router } from "express";
import { crearDatos, obtenerDatos } from "../controller/albumController.js";
const router = Router()

router.get('/albumes', obtenerDatos)
router.post('/albumes', crearDatos)


export default router;