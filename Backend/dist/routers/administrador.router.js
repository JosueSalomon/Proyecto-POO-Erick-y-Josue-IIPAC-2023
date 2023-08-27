"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administrador_controller_1 = require("../controllers/administrador.controller");
const router = express_1.default.Router();
router.post('/login', administrador_controller_1.loginAdmin);
router.get('/', administrador_controller_1.obtenerEmpresas);
router.get('/:id/librosEmpresa', administrador_controller_1.obtenerLibrosDeEmpresa);
router.post('/nuevaEmpresa', administrador_controller_1.crearEmpresa);
router.post('/:id/nuevoProducto', administrador_controller_1.crarNuevoProducto);
router.delete('/:id/borrarEmpresa', administrador_controller_1.borrarEmpresa);
router.put('/:id/borrarLibroDeEmpresa', administrador_controller_1.borrarLibroDeEmpresa);
router.put('/:id/libroActualizarEmpresa', administrador_controller_1.actualizarLibro);
router.put('/:id/motoristaAprobar', administrador_controller_1.motoristaAprobar);
router.put('/:id/motoristaDesAprobar', administrador_controller_1.motoristaDesAprobado);
exports.default = router;
