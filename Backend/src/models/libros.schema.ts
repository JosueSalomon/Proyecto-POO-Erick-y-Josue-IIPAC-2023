import mongoose  from "mongoose";
import { Libros } from "./libros.model";


const schema = new mongoose.Schema<Libros>({
    nombre: String,
    imagen: String,
    precio: Number,
    categoria: String,
    descripcion: String
})

export const LibrioSchema = mongoose.model('libros', schema);