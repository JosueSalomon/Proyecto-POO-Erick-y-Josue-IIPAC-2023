import { Request, Response } from "express";
import mongoose from "mongoose";
import { UsuarioSchema } from "../models/usuarios.schema";


export const registrarUsuario = (req: Request, res: Response) =>{
    const usuarioNuevo = new UsuarioSchema(req.body);
    usuarioNuevo.save().then((usuarioNuevo:any) =>{
        res.send({message: 'Usuario registrado con exito',usuarioNuevo});
        res.end();
    }).catch((error:any) =>{
        console.log('ERRRORRR: ', error);
        res.send({message: 'Hubo un error al guardar', error}); 
        res.end();
    })
}

export const loginUsuario = async(req:Request, res:Response)=>{
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo, contresana: req.body.contresana}, {contrasena: false});
    if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
    res.end();
    }
    else 
    res.send({status: false, message: 'Login incorrecto'});
    res.end();
}

export const obtenerUsuarios = (req:Request, res:Response)=>{
    UsuarioSchema.find()
    .then(resultado=>{
        res.send({status:true,message:"Usuarios encontrados",resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status:false,message:"No se encontraron usarios",error})
    })
}

export const obtenerUsuario = (req:Request, res:Response)=>{
    UsuarioSchema.findOne({_id:new mongoose.Types.ObjectId(req.params.id)})
    .then(resultado=>{
        res.send({status:true,message:"Usuario encontrado",resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status:false,message:"No se encontraro el usario",error});
        res.end();
    })
}