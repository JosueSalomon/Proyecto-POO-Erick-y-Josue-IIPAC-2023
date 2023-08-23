import { Request, Response } from "express";
import mongoose from "mongoose";

export const login = async(req:Request, res:Response)=>{
    res.send("Haciendo pruebas de login, solo con mensaje ");
    res.end();

    //Se va poner cuando tengamos un schema
    // const usuario = await UsuarioSchema.findOne({nombre: req.body.usuario, contrasena: req.body.contrasena}, {contrasena: false});
    // if (usuario) {
    // res.send({status: true, message: 'Login correcto', usuario});
    // }
    // else 
    // res.send({status: false, message: 'Login incorrecto'});
    // res.end();
}

export const obtenerUsuarios = (req:Request, res:Response)=>{
    res.send("Obteniendo todos los usuarios ");
    res.end();
    // UsuarioSchema.find()
    // .then(resultado=>{
    //     res.send({status:true,message:"Usuarios encontrados",resultado});
    //     res.end();
    // })
    // .catch(error=>{
    //     res.send({status:false,message:"No se encontraron usarios",error})
    // })
}

export const obtenerUsuario = (req:Request, res:Response)=>{
    
    res.send("Este es el usuario " )
    // UsuarioSchema.findOne({_id:new mongoose.Types.ObjectId(req.params.id)})
    // .then(resultado=>{
    //     res.send({status:true,message:"Usuario encontrado",resultado});
    //     res.end();
    // })
    // .catch(error=>{
    //     res.send({status:false,message:"No se encontraro el usario",error});
    //     res.end();
    // })
}