import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administradores.schema";
import { EmpresaSchema } from "../models/empresas.schema";
import mongoose from "mongoose";
import { LibrioSchema } from "../models/libros.schema";
import { MotoristaSchema } from "../models/motoristas.schema";

export const loginAdmin = async (req: Request, res: Response) => {
    const usuario = await AdministradorSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
}

export const crearEmpresa = (req: Request, res: Response) => {
    const empresaNueva = new EmpresaSchema(req.body);
    empresaNueva.save().then((empresaNueva: any) => {
        res.send({ message: 'Se agrego la nueva empresa', empresaNueva });
        res.end();
    }).catch((error: any) => {
        res.send({ message: 'Hubo un error al guardar la empresa', error });
        res.end();
    })
}
//

export const crarNuevoProducto = (req: Request, res: Response) => {
    EmpresaSchema.updateOne({ _id: req.params.id },
        {
            $push: {
                Libros: {
                    _id: new mongoose.Types.ObjectId(req.body.id),
                    nombre: req.body.nombre,
                    imagen: req.body.imagen,
                    precio: req.body.precio,
                    categoria: req.body.categoria,
                    descripcion: req.body.descripcion
                }
            }
        }
    ).then(result => {
        res.send({ message: 'Libro agregado a la empresa', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    })
};

//
export const borrarEmpresa = (req: Request, res: Response) => {
    EmpresaSchema.deleteOne({ _id: req.params.id })
        .then((removeResult: any) => {
            res.send({ message: 'Registro eliminado', removeResult });
            res.end();
        });
}

export const borrarLibroDeEmpresa = async (req: Request, res: Response) => {
    const empresaId = req.params.id; // Obtén el _id de la empresa de los parámetros de la URL
    const libroId = req.body._id; // Obtén el _id del libro a eliminar del cuerpo de la solicitud

    try {
        const empresa = await EmpresaSchema.findById(empresaId);

        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrado' });
        }

        const libroIndex = empresa.Libros.findIndex(libro => libro._id.toString() === libroId);
        console.log(libroIndex)
        if (libroIndex === -1) {
            return res.status(404).json({ message: 'libro no encontrado en la lista de libros de la empresa' });
        }

        const LibroBorrado = empresa.Libros.splice(libroIndex, 1)[0];

        await empresa.save();

        return res.status(200).json({ message: 'Libro borrado con exito ' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
};

export const actualizarLibro = async (req: Request, res: Response) => {
    const empresaId = req.params.id; // Obtén el _id de la empresa de los parámetros de la URL
    const libroId = req.body._id; // Obtén el _id del libro a actualizar del cuerpo de la solicitud

    try {
        const empresa = await EmpresaSchema.findById(empresaId);

        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }

        const libroToUpdate = empresa.Libros.find(libro => libro._id.toString() === libroId);
        console.log(libroToUpdate)
        if (!libroToUpdate) {
            return res.status(404).json({ message: 'Libro no encontrado en la lista de libros de la empresa' });
        }

        // Actualizar los campos del libro
        libroToUpdate.nombre = req.body.nombre;
        libroToUpdate.imagen = req.body.imagen;
        libroToUpdate.precio = req.body.precio;
        libroToUpdate.categoria = req.body.categoria;
        libroToUpdate.descripcion = req.body.descripcion;
        
        empresa.markModified('Libros');
        await empresa.save();;
        console.log("la empresa",empresa)
        return res.status(200).json({ message: 'Libro actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
};


export const motoristaAprobar = async (req: Request, res: Response) => {
    try {
        const motoristaId = req.params.id;

        // Verifica si el motorista existe antes de realizar la actualización
        const motorista = await MotoristaSchema.findOne({ _id: motoristaId });

        if (!motorista) {
            return res.status(404).send({ status: false, message: "Motorista no encontrado" });
        }

        // Cambia el estado de false a true
        motorista.estado = true;
        await motorista.save();

        res.status(200).send({ status: true, message: "Estado del motorista cambiado a true con éxito" });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error al cambiar el estado del motorista", error });
    }
};

export const motoristaDesAprobado = async (req: Request, res: Response) => {
    try {
        const motoristaId = req.params.id;

        // Verifica si el motorista existe antes de realizar la actualización
        const motorista = await MotoristaSchema.findOne({ _id: motoristaId });

        if (!motorista) {
            return res.status(404).send({ status: false, message: "Motorista no encontrado" });
        }

        // Cambia el estado de false a true
        motorista.estado = false;
        await motorista.save();

        res.status(200).send({ status: true, message: "Estado del motorista cambiado a false con éxito" });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error al cambiar el estado del motorista", error });
    }
};





