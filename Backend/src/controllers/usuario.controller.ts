import { Request, Response } from "express";
import mongoose from "mongoose";
import { UsuarioSchema } from "../models/usuarios.schema";
import { LibrioSchema } from "../models/libros.schema";


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
    const usuario = await UsuarioSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
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

// export const agregarCarrito = (req: Request, res: Response) => {
//     UsuarioSchema.updateOne({ _id: req.params.id },
//         {
//             $push: {
//                 carrito: {
//                     _id: new mongoose.Types.ObjectId(req.body.id),
//                     nombre: req.body.nombre,
//                     imagen: req.body.imagen,
//                     precio: req.body.precio
//                 }
//             }
//         }
//     ).then(result => {
//         res.send({ message: 'Agregado al carrito', result });
//         res.end();
//     }).catch(error => {
//         res.send({ message: 'Ocurrio un error', error });
//         res.end();
//     })
// };

// export const agregarCarrito = (req: Request, res: Response) => {
//     const userId = req.params.id;
//     const { _id: libroId, nombre, imagen, precio } = req.body;

//     // Validar entrada si es necesario

//     UsuarioSchema.updateOne(
//         { _id: userId },
//         {
//             $push: {
//                 carrito: {
//                     _id: new mongoose.Types.ObjectId(libroId),
//                     nombre,
//                     imagen,
//                     precio
//                 }
//             }
//         }
//     ).then(result => {
//                 res.send({ message: 'Agregado al carrito', result });
//                 res.end();
//             }).catch(error => {
//                 res.send({ message: 'Ocurrio un error', error });
//                 res.end();
//             })
// };

export const agregarCarrito = (req: Request, res: Response) => {
    const userId = req.params.id;
    const { _id: libroId } = req.body;

    LibrioSchema.findById(libroId)
        .then(libro => {
            if (!libro) {
                return res.status(404).send({ message: 'Libro no encontrado' });
            }

            const { nombre, imagen, precio } = libro;

            UsuarioSchema.updateOne(
                { _id: userId },
                {
                    $push: {
                        carrito: {
                            _id: new mongoose.Types.ObjectId(libroId),
                            nombre,
                            imagen,
                            precio
                        }
                    }
                }
            )
            .then(() => {
                res.status(200).send({ message: 'Agregado al carrito' });
            })
            .catch(error => {
                res.status(500).send({ message: 'Ocurrió un error al agregar al carrito', error });
            });
        })
        .catch(error => {
            res.status(500).send({ message: 'Ocurrió un error al obtener el libro', error });
        });
};