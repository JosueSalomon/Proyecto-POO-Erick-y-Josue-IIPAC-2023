import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administradores.schema";

export const loginAdmin = async(req:Request, res:Response)=>{
    const usuario = await AdministradorSchema.findOne({correo: req.body.correo, contresana: req.body.contresana}, {contrasena: false});
    if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
    }
    else 
    res.send({status: false, message: 'Login incorrecto'});
    res.end();
}
