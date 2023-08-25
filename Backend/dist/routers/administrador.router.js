"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administrador_controller_1 = require("../controllers/administrador.controller");
const router = express_1.default.Router();
router.post('/login', administrador_controller_1.loginAdmin);
exports.default = router;