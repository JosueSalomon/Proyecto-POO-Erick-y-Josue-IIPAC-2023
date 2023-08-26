import mongoose from "mongoose";
import { Pedidos } from "./pedidos.model";


export interface Motorista{
    _id?:mongoose.Types.ObjectId;
    nombre: string;
    placa:  string;
    correo: string;
    direccion: string;
    contrasena: string;
    pedidos: Array<Pedidos>;
    pedidosEntregados: Array<Pedidos>;
    img: string;
    comisiones: number;
    estado: boolean; 
    
}