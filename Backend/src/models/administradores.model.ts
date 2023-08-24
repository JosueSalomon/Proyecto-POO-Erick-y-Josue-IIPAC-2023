import mongoose from "mongoose";


export interface Administrador{
    _id?:mongoose.Types.ObjectId;
    nombre: string;
    correo: string;
    contrasena: string;
    img: string;
}