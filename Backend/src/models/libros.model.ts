import mongoose from "mongoose";


export interface BaseLibro{
    nombre: string;
    imagen: string;
    precio: number;
}

export interface Libros extends BaseLibro {
    _id?:mongoose.Types.ObjectId;
    categoria: string;
    descripcion: string;
}