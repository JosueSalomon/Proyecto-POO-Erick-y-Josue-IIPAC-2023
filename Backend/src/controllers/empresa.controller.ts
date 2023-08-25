import { Request, Response } from "express";
import mongoose from "mongoose";
import { EmpresaSchema } from "../models/empresas.schema";

export const obtenerLibrosDeEmpresa = (req:Request, res:Response)=>{
    EmpresaSchema.findOne({_id:new mongoose.Types.ObjectId(req.params.id)},{Libros: true})
    .then(resultado=>{
        res.send({status:true,message:"Libros encontrados de la emprea",resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status:false,message:"No se encontraron libros",error});
        res.end();
    })
}