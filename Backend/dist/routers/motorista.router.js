"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motorista_controller_1 = require("../controllers/motorista.controller");
const router = express_1.default.Router();
router.post('/login', motorista_controller_1.loginMotorista); //Cheqye
router.post('/registo', motorista_controller_1.registrarMotorista);
//Obtener todos los motoristas
router.get('/', motorista_controller_1.obtenerMotoristas); //Chque
router.get('/:id/Motoristapedidos', motorista_controller_1.obtenerPedidos);
router.get('/:id/pedidosEntregados', motorista_controller_1.obtenerPedidosEntregados);
exports.default = router;
