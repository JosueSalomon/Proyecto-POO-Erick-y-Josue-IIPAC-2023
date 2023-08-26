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
const empresas_schema_1 = require("../models/empresas.schema");
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
const agregarCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const empresaID = req.body._idEmpresa;
    const libroId = req.body._id;
    try {
        const empresa = yield empresas_schema_1.EmpresaSchema.findById(empresaID);
        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }
        const libroEncontrado = empresa.Libros.find(libro => libro._id.toString() === libroId);
        if (!libroEncontrado) {
            return res.status(404).json({ message: 'Libro no encontrado en la lista de libros de la empresa' });
        }
        const { _id, nombre, imagen, precio } = libroEncontrado;
        const usuario = yield usuarios_schema_1.UsuarioSchema.findById(userId);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        usuario.carrito.push({
            _id: new mongoose_1.default.Types.ObjectId(libroId),
            nombre,
            imagen,
            precio
        });
        yield usuario.save();
        return res.status(200).json({ message: 'Libro agregado al carrito con éxito' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al procesar la solicitud', error });
    }
});
exports.agregarCarrito = agregarCarrito;
