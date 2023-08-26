"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pedido_controller_1 = require("../controllers/pedido.controller");
const router = express_1.default.Router();
router.post('/', pedido_controller_1.nuevoPedido);
exports.default = router;
