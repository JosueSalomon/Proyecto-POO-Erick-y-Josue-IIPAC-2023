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
exports.obtenerPedidosEntregados = exports.obtenerPedidos = exports.obtenerMotoristas = exports.loginMotorista = exports.registrarMotorista = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const motoristas_schema_1 = require("../models/motoristas.schema");
const registrarMotorista = (req, res) => {
    const motoristaNuevo = new motoristas_schema_1.MotoristaSchema(req.body);
    motoristaNuevo.save().then((motoristaNuevo) => {
        res.send({ message: 'Motorista registrado con exito, falta aprovacion del administrador', motoristaNuevo });
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar', error });
        res.end();
    });
};
exports.registrarMotorista = registrarMotorista;
const loginMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield motoristas_schema_1.MotoristaSchema.findOne({ correo: req.body.correo, contresana: req.body.contresana }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
        res.end();
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginMotorista = loginMotorista;
const obtenerMotoristas = (req, res) => {
    motoristas_schema_1.MotoristaSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Usuarios encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron usarios", error });
    });
};
exports.obtenerMotoristas = obtenerMotoristas;
const obtenerPedidos = (req, res) => {
    motoristas_schema_1.MotoristaSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { pedidos: true })
        .then(resultado => {
        res.send({ status: true, message: "Pedidos tomados orde", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraro el usario", error });
        res.end();
    });
};
exports.obtenerPedidos = obtenerPedidos;
const obtenerPedidosEntregados = (req, res) => {
    motoristas_schema_1.MotoristaSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { pedidosEntregados: true })
        .then(resultado => {
        res.send({ status: true, message: "Pedidos tomados orde", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraro el usario", error });
        res.end();
    });
};
exports.obtenerPedidosEntregados = obtenerPedidosEntregados;
