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
exports.crarNuevoProducto = exports.crearEmpresa = exports.loginAdmin = void 0;
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
const crarNuevoProducto = (req, res) => {
    const productoNuevo = new libros_schema_1.LibrioSchema(req.body);
    productoNuevo.save()
        .then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        yield empresas_schema_1.EmpresaSchema.updateOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, {
            $push: {
                Libros: {
                    productoNuevo: resultado._id,
                    nombre: resultado.nombre,
                    imagen: resultado.imagen,
                    precio: resultado.precio,
                    categoria: resultado.categoria,
                    descripcion: resultado.descripcion
                }
            }
        });
        res.send({ status: true, message: "Libro agregado con exito a la empresa", resultado });
        res.end();
    }))
        .catch(error => {
        res.send({ status: false, message: "No se agrego el libri", error });
    });
};
exports.crarNuevoProducto = crarNuevoProducto;
