import { Request, Response } from "express";
import mongoose from "mongoose";
import { MotoristaSchema } from "../models/motoristas.schema";





export const registrarMotorista = (req: Request, res: Response) =>{
    const motoristaNuevo = new MotoristaSchema(req.body);
    motoristaNuevo.save().then((motoristaNuevo:any) =>{
        res.send({message: 'Motorista registrado con exito, falta aprovacion del administrador',motoristaNuevo});
        res.end();
    }).catch((error:any) =>{
        res.send({message: 'Hubo un error al guardar', error}); 
        res.end();
    })
}

export const loginMotorista = async(req:Request, res:Response)=>{
    const usuario = await MotoristaSchema.findOne({correo: req.body.correo, contresana: req.body.contresana}, {contrasena: false});
    if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
    res.end();
    }
    else 
    res.send({status: false, message: 'Login incorrecto'});
    res.end();
}

export const obtenerMotoristas = (req:Request, res:Response)=>{
    MotoristaSchema.find()
    .then(resultado=>{
        res.send({status:true,message:"Usuarios encontrados",resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status:false,message:"No se encontraron usarios",error})
    })
}