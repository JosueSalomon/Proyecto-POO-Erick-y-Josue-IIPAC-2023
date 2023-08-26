import mongoose from "mongoose";


export interface Pedidos{
    _id?:mongoose.Types.ObjectId;
    nombreCliente: string;
	direccion: string;
	precio: number;
	telefono: string; 
	
	fecha: string; 
}