import mongoose from "mongoose";
import { Libros } from "./libros.model";


export interface Empresa{
    _id?:mongoose.Types.ObjectId;
    nombre: string;
    img: string;
    Libros: Array<Libros>;
    review: number;
}