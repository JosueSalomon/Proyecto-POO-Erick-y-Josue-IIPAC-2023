import mongoose  from "mongoose";
import { Motorista } from "./motoristas.model";
import { Pedidos } from "./pedidos.model";


const schema = new mongoose.Schema<Motorista>({
    nombre: String,
    placa:  String,
    correo: String,
    direccion: String,
    contrasena: String,
    pedidos: Array<Pedidos>,
    img: String,
    comisiones: Number,
    estado: Boolean
})

export const MotoristaSchema = mongoose.model('motoristas', schema);