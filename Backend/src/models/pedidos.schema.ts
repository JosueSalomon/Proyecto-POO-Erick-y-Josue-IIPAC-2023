import mongoose  from "mongoose";
import { Pedidos } from "./pedidos.model";


const schema = new mongoose.Schema<Pedidos>({
    nombreCliente: String,
	direccion: String,
	precio: Number,
	telefono: String, 
	estado: String, 
	fecha: String
})

export const PedidosSchema = mongoose.model('pedidos', schema);