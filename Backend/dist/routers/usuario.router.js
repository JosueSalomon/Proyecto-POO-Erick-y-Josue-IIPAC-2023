"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.default.Router();
router.post('/login', usuario_controller_1.login); //Cheqye
//Obtener todos los usuairos
router.get('/', usuario_controller_1.obtenerUsuarios); //Chque
// (collection usuarios) get usuario actual
router.get('/:id', usuario_controller_1.obtenerUsuario); //si da
exports.default = router;
