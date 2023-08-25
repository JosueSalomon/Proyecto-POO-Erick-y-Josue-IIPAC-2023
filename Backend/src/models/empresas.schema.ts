import mongoose  from "mongoose";
import { Empresa } from "./empresas.model";
import { Libros } from "./libros.model";


const schema = new mongoose.Schema<Empresa>({
    nombre: String,
    img: String,
    Libros: Array<Libros>,
    review: Number
})

export const EmpresaSchema = mongoose.model('empresas', schema);