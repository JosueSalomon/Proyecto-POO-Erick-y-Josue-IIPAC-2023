import { Request, Response } from "express";
import mongoose from "mongoose";
import { UsuarioSchema } from "../models/usuarios.schema";
import { LibrioSchema } from "../models/libros.schema";
import { EmpresaSchema } from "../models/empresas.schema";


export const registrarUsuario = (req: Request, res: Response) => {
    const usuarioNuevo = new UsuarioSchema(req.body);
    usuarioNuevo.save().then((usuarioNuevo: any) => {
        res.send({ message: 'Usuario registrado con exito', usuarioNuevo });
        res.end();
    }).catch((error: any) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar', error });
        res.end();
    })
}

export const loginUsuario = async (req: Request, res: Response) => {
    const usuario = await UsuarioSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
        res.end();
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
}

export const obtenerUsuarios = (req: Request, res: Response) => {
    UsuarioSchema.find()
        .then(resultado => {
            res.send({ status: true, message: "Usuarios encontrados", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraron usarios", error })
        })
}

export const obtenerUsuario = (req: Request, res: Response) => {
    UsuarioSchema.findOne({ _id: new mongoose.Types.ObjectId(req.params.id) })
        .then(resultado => {
            res.send({ status: true, message: "Usuario encontrado", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraro el usario", error });
            res.end();
        })
}               

export const agregarCarrito = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const empresaID = req.body._idEmpresa;
    const libroId = req.body._id;

    try {
        const empresa = await EmpresaSchema.findById(empresaID);

        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }

        const libroEncontrado = empresa.Libros.find(libro => libro._id.toString() === libroId);

        if (!libroEncontrado) {
            return res.status(404).json({ message: 'Libro no encontrado en la lista de libros de la empresa' });
        }

        const { _id, nombre, imagen, precio } = libroEncontrado;

        const usuario = await UsuarioSchema.findById(userId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        usuario.carrito.push({
            _id: new mongoose.Types.ObjectId(libroId),
            nombre,
            imagen,
            precio
        });

        await usuario.save();

        return res.status(200).json({ message: 'Libro agregado al carrito con éxito' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
};