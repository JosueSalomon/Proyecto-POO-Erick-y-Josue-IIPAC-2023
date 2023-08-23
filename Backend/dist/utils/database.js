"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default.connect('mongodb+srv://Josue_Salomon_03:Josue_Salomon03@cluster0.t0bxyyl.mongodb.net/Readigo')
            .then(respuesta => {
            console.log("Conectado a base de datos Readigo");
        })
            .catch(respuesta => {
            console.log("Error al conectarse a la base de datos Readigo");
        });
    }
}
exports.Database = Database;
