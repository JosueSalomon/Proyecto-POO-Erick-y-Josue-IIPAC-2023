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

// export const borrarLibroDeEmpresa = (req: Request, res: Response) => {
//     const empresaID = req.params.id;
//     const { _id: libroId } = req.body;

//     LibrioSchema.findByIdAndDelete(libroId)
//         .then(libro => {
//             if (!libro) {
//                 return res.status(404).send({ message: 'libro no encontrado' });
//             }

//             const { nombreCliente, direccion, precio, telefono,estado,fecha} = pedido;

//             EmpresaSchema.updateOne(
//                 { _id: empresaID },
//                 {
//                     $pull: {
//                         pedidos: {
//                             _id: new mongoose.Types.ObjectId(pedidoID),
//                             nombreCliente,
//                             direccion,
//                             precio,
//                             telefono,
//                             estado,
//                             fecha
//                         }
//                     }
//                 }
//             )
//             .then(result =>{
//                 res.send({ message: 'Agregado al pedido del motorista', result });
//                 res.end();
//             })
//             .catch(error => {
//                 res.send({ message: 'Ocurrio un error para agregar al motorista', error });
//                 res.end();
//             })
//         })
//         .catch(error => {
//             res.send({ message: 'Ocurrió un error al obtener el pedido', error });
//             res.end();
//         });
// };


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
