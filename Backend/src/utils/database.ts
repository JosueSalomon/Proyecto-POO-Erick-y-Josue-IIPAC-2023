import mongoose from "mongoose";

export class Database {
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect('mongodb+srv://Josue_Salomon_03:Josue_Salomon03@cluster0.t0bxyyl.mongodb.net/Readigo')
        .then(respuesta=>{
            console.log("Conectado a base de datos Readigo");
        })
        .catch(respuesta=>{
            console.log("Error al conectarse a la base de datos Readigo");
        })
    }
}