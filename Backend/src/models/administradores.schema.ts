import mongoose  from "mongoose";
import { Administrador } from "./administradores.model";

const schema = new mongoose.Schema<Administrador>({
    nombre: String,
    correo: String,
    contrasena: String,
    img: String
})

export const AdministradorSchema = mongoose.model('administradores', schema);