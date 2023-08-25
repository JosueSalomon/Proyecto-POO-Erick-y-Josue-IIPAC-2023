"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    correo: String,
    contrasena: String,
    telefono: String,
    img: String,
    carrito: (Array)
});
exports.UsuarioSchema = mongoose_1.default.model('usuarios', schema);
