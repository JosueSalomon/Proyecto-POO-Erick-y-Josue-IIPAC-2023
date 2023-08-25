import mongoose  from "mongoose";
import { Usuarios } from "./usuarios.model";
import { BaseLibro } from "./libros.model";

const schema = new mongoose.Schema<Usuarios>({
    nombre: String,
    correo: String,
    contrasena: String,
    telefono: String,
    img: String,
    carrito: Array<BaseLibro>
})

export const UsuarioSchema = mongoose.model('usuarios', schema);