import { albumModel } from "../model/albumModel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let albumes = await albumModel.find()
        respuesta.status(200).send(albumes)
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body
        // Guardar datos
        await albumModel.create(data)
        // devuelve la vista al usuario para vea los nuevos datos
        let albumes = await albumModel.find()
        respuesta.status(200).send(data)
    } catch (error) {
        console.log(error);
    }
}