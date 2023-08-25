import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administradores.schema";
import { EmpresaSchema } from "../models/empresas.schema";
import mongoose from "mongoose";
import { LibrioSchema } from "../models/libros.schema";

export const loginAdmin = async(req:Request, res:Response)=>{
    const usuario = await AdministradorSchema.findOne({correo: req.body.correo, contresana: req.body.contresana}, {contrasena: false});
    if (usuario) {
    res.send({status: true, message: 'Login correcto', usuario});
    }
    else 
    res.send({status: false, message: 'Login incorrecto'});
    res.end();
}

export const crearEmpresa = (req: Request, res: Response) =>{
    const empresaNueva = new EmpresaSchema(req.body);
    empresaNueva.save().then((empresaNueva:any) =>{
        res.send({message: 'Se agrego la nueva empresa',empresaNueva});
        res.end();
    }).catch((error:any) =>{
        res.send({message: 'Hubo un error al guardar la empresa', error}); 
        res.end();
    })
}
//
export const crarNuevoProducto = (req:Request, res:Response)=>{
    const productoNuevo = new LibrioSchema(req.body);
    productoNuevo.save()
    .then(async resultado=>{
        await EmpresaSchema.updateOne({_id: new mongoose.Types.ObjectId(req.params.id) },{
                $push: {
                    Libros:{
                        productoNuevo: resultado._id,
                        nombre: resultado.nombre,
                        imagen: resultado.imagen,
                        precio: resultado.precio,
                        categoria: resultado.categoria,
                        descripcion: resultado.descripcion
                    } 
                }
        })
        res.send({status:true,message:"Libro agregado con exito a la empresa",resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status:false,message:"No se agrego el libri",error})
    })
}
