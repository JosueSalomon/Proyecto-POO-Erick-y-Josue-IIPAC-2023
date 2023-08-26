"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarCarrito = exports.obtenerUsuario = exports.obtenerUsuarios = exports.loginUsuario = exports.registrarUsuario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usuarios_schema_1 = require("../models/usuarios.schema");
const libros_schema_1 = require("../models/libros.schema");
const registrarUsuario = (req, res) => {
    const usuarioNuevo = new usuarios_schema_1.UsuarioSchema(req.body);
    usuarioNuevo.save().then((usuarioNuevo) => {
        res.send({ message: 'Usuario registrado con exito', usuarioNuevo });
        res.end();
    }).catch((error) => {
        console.log('ERRRORRR: ', error);
        res.send({ message: 'Hubo un error al guardar', error });
        res.end();
    });
};
exports.registrarUsuario = registrarUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UsuarioSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
        res.end();
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginUsuario = loginUsuario;
const obtenerUsuarios = (req, res) => {
    usuarios_schema_1.UsuarioSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Usuarios encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron usarios", error });
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res) => {
    usuarios_schema_1.UsuarioSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) })
        .then(resultado => {
        res.send({ status: true, message: "Usuario encontrado", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraro el usario", error });
        res.end();
    });
};
exports.obtenerUsuario = obtenerUsuario;
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
const agregarCarrito = (req, res) => {
    const userId = req.params.id;
    const { _id: libroId } = req.body;
    libros_schema_1.LibrioSchema.findById(libroId)
        .then(libro => {
        if (!libro) {
            return res.status(404).send({ message: 'Libro no encontrado' });
        }
        const { nombre, imagen, precio } = libro;
        usuarios_schema_1.UsuarioSchema.updateOne({ _id: userId }, {
            $push: {
                carrito: {
                    _id: new mongoose_1.default.Types.ObjectId(libroId),
                    nombre,
                    imagen,
                    precio
                }
            }
        })
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
exports.agregarCarrito = agregarCarrito;
