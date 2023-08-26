"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administrador_controller_1 = require("../controllers/administrador.controller");
const router = express_1.default.Router();
router.post('/login', administrador_controller_1.loginAdmin);
router.post('/nuevaEmpresa', administrador_controller_1.crearEmpresa);
router.post('/:id/nuevoProducto', administrador_controller_1.crarNuevoProducto);
router.delete('/:id/borrarEmpresa', administrador_controller_1.borrarEmpresa);
router.delete('/:id/borrarLibro', administrador_controller_1.borrarLibro);
router.put('/:id/libroActualizar', administrador_controller_1.actualizarLibro);
exports.default = router;
