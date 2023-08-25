"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombreCliente: String,
    direccion: String,
    precio: Number,
    telefono: String,
    estado: String,
    fecha: String
});
exports.PedidosSchema = mongoose_1.default.model('pedidos', schema);
