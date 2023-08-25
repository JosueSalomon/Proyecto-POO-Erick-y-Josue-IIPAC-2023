"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresa_controller_1 = require("../controllers/empresa.controller");
const router = express_1.default.Router();
router.get('/:id/empresa', empresa_controller_1.obtenerLibrosDeEmpresa);
exports.default = router;
