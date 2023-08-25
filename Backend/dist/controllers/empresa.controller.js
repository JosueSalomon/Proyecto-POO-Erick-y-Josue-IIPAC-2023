"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerLibrosDeEmpresa = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const empresas_schema_1 = require("../models/empresas.schema");
const obtenerLibrosDeEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { Libros: true })
        .then(resultado => {
        res.send({ status: true, message: "Libros encontrados de la emprea", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron libros", error });
        res.end();
    });
};
exports.obtenerLibrosDeEmpresa = obtenerLibrosDeEmpresa;
