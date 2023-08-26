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
exports.actualizarLibro = exports.borrarEmpresa = exports.crarNuevoProducto = exports.crearEmpresa = exports.loginAdmin = void 0;
const administradores_schema_1 = require("../models/administradores.schema");
const empresas_schema_1 = require("../models/empresas.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const libros_schema_1 = require("../models/libros.schema");
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield administradores_schema_1.AdministradorSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginAdmin = loginAdmin;
const crearEmpresa = (req, res) => {
    const empresaNueva = new empresas_schema_1.EmpresaSchema(req.body);
    empresaNueva.save().then((empresaNueva) => {
        res.send({ message: 'Se agrego la nueva empresa', empresaNueva });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar la empresa', error });
        res.end();
    });
};
exports.crearEmpresa = crearEmpresa;
//
const crarNuevoProducto = (req, res) => {
    empresas_schema_1.EmpresaSchema.updateOne({ _id: req.params.id }, {
        $push: {
            Libros: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                precio: req.body.precio,
                categoria: req.body.categoria,
                descripcion: req.body.descripcion
            }
        }
    }).then(result => {
        res.send({ message: 'Libro agregado a la empresa', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.crarNuevoProducto = crarNuevoProducto;
//
const borrarEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.deleteOne({ _id: req.params.id })
        .then((removeResult) => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    });
};
exports.borrarEmpresa = borrarEmpresa;
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
const actualizarLibro = (req, res) => {
    libros_schema_1.LibrioSchema.updateOne({ _id: req.params.id }, req.body).then((updateResponse) => {
        res.send({ message: 'Registro actualizado', updateResponse });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
};
exports.actualizarLibro = actualizarLibro;
