import { Request, Response } from "express";
import { AdministradorSchema } from "../models/administradores.schema";
import { EmpresaSchema } from "../models/empresas.schema";
import mongoose from "mongoose";
import { LibrioSchema } from "../models/libros.schema";

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
    const productoNuevo = new LibrioSchema(req.body);
    productoNuevo.save()
        .then(async resultado => {
            await EmpresaSchema.updateOne({ _id: new mongoose.Types.ObjectId(req.params.id) }, {
                $push: {
                    Libros: {
                        _id: resultado._id,//Id mongo
                        nombre: resultado.nombre, //nombre del libro
                        imagen: resultado.imagen,
                        precio: resultado.precio, //Precio
                        categoria: resultado.categoria,
                        descripcion: resultado.descripcion
                    }
                }
            })
            res.send({ status: true, message: "Libro agregado con exito a la empresa", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se agrego el libri", error })
        })
}
//
export const borrarEmpresa = (req: Request, res: Response) => {
    EmpresaSchema.deleteOne({ _id: req.params.id })
        .then((removeResult: any) => {
            res.send({ message: 'Registro eliminado', removeResult });
            res.end();
        });
}


export const borrarLibro = (req: Request, res: Response) => {
    const libroId = req.params.id; // ID del libro a eliminar
    const empresaId = req.body._id; // ID de la empresa obtenido del cuerpo de la petición

    LibrioSchema.findByIdAndDelete(libroId)
        .then(libroEliminado => {
            if (!libroEliminado) {
                return res.status(404).json({ status: false, message: "Libro no encontrado" });
            }

            EmpresaSchema.updateOne(
                { _id: new mongoose.Types.ObjectId(empresaId) },
                {
                    $pull: {
                        carrito: { _id: libroId }
                    }
                }
            )
                .then(result => {
                    return res.json({ status: true, message: "Libro eliminado del carrito con éxito", result });
                })
                .catch(error => {
                    return res.status(500).json({ status: false, message: "Error al eliminar el libro del carrito", error });
                });
        })
        .catch(error => {
            return res.status(500).json({ status: false, message: "Error al eliminar el libro", error });
        });
};

export const actualizarLibro = (req: Request, res: Response) => {
    LibrioSchema.updateOne({ _id: req.params.id }, req.body
    ).then((updateResponse: any) => {
        res.send({ message: 'Registro actualizado', updateResponse });
        res.end();
    }).catch((error: any) => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
}
