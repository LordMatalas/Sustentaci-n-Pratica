import { artistModel } from "../model/artistModel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let artistas = await artistModel.find()
        respuesta.status(200).send(artistas)
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body
        // Guardar datos
        await userModel.create(data)
        // devuelve la vista al usuario para vea los nuevos datos
        let artistas = await artistModel.find()
        respuesta.status(200).send(artistas)
    } catch (error) {
        console.log(error);
    }
}