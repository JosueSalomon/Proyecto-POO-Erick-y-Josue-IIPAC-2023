import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administradores.schema";
import { EmpresaSchema } from "../models/empresas.schema";

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
    const usuarioNuevo = new EmpresaSchema(req.body);
    usuarioNuevo.save().then((usuarioNuevo:any) =>{
        res.send({message: 'Se agrego la nueva empresa',usuarioNuevo});
        res.end();
    }).catch((error:any) =>{
        res.send({message: 'Hubo un error al guardar la empresa', error}); 
        res.end();
    })
}
