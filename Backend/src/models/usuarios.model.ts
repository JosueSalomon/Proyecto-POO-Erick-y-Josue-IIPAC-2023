import mongoose from "mongoose";
import { BaseLibro } from "./libros.model";

export interface baseUsuario{

}

export interface Usuarios{
    _id?:mongoose.Types.ObjectId;
    nombre: string;
    correo: string;
    contrasena: string;
    telefono: string;
    img: string;
    carrito: Array<BaseLibro>
}